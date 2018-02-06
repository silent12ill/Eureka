import React, { Component } from 'react';
import { Row, Col, message } from 'antd';
import axios from 'axios';
import Connect from '../Connect';
import NavWhite from '../Nav/NavWhite';
import VideoContainer from './VideoContainer';
import MindfeedBar from './MindfeedBar';
import VideoInfo from './VideoInfo';
import RecentVideos from './RecentVideos';
import '../../css/style.css';
import './dashboard.css';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      upvoteIsClicked: false,
      downvoteIsClicked: false
    };
  }

  componentDidMount() {
    const { currentPlaylist, currentVideo, mindfeedVideos, categoryVideos, setPlaylistVideos, playlistIsLoading } = this.props;

    if (!currentPlaylist.videos.length) { //if currentlyplaylist doesn't exist
      if (mindfeedVideos.length) { // if mindfeed videos do exist
        setPlaylistVideos(mindfeedVideos); //set curerntlplaylist to mindfeed videos
      } else if (categoryVideos.length) { //if categoryVideos exist,
        setPlaylistVideos(categoryVideos); //set categoryVideos to currentplaylist
      } else if (!currentPlaylist.playlistIsLoading) { //don't fetch videos if we are already getting them
        this.resolvePlaylistByRoute() // get from the route
      } else {
        console.log('error with playlist')
      }
    }
    if (this.props.authStatus.currentUser != 'guest' ) {
      this.updateUserHistory(this.props.currentVideo.videoId);
    }
    this.setLikesDislikesUI();
  }

  resolvePlaylistByRoute() {
    const { authStatus, match, history, getPlaylistByCategory, getMindfeedPlaylist } = this.props;
    const categoryRoute = match.params.category;

    if (categoryRoute === 'mymindfeed') {
      if (authStatus.loggedIn) {
        getMindfeedPlaylist(authStatus.currentUser)
      } else {
        history.push('/signup');
      }
    }

    if (categoryRoute && categoryRoute !== 'mymindfeed') {
      getPlaylistByCategory(this.capitalize(categoryRoute));
    }

    if (!categoryRoute && authStatus.loggedIn) {
      history.push('/myaccount');
    } else {
      history.push('/')
    }
  }

  capitalize(string) {
    // Categories are stored in the db as Title case (first letter capitalized).
    // Sanitizing here to make sure the first letter is capitalized.
    return string && `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPlaylist.counter === -1 && prevProps.currentPlaylist.counter !== -1) {
      message.success("You've watched all videos in this category, congratulations! Explore other topics or sign up to get your custom Mindfeed playlist.", 4);
    }

    // If navigating from the Nav Bar, check if the category
    // has changed. If so, update the playlist.
    const currentCategory = this.props.match.params.category;
    const previousCategory = prevProps.match.params.category;
    if (currentCategory !== previousCategory) {
      if (currentCategory === 'mymindfeed') {
        this.props.getMindfeedPlaylist(this.props.authStatus.currentUser);
      } else {
        const category = this.capitalize(currentCategory);
        this.props.getPlaylistByCategory(category);
      }
    }
  }


  /* LIKE/DISLIKE HANDLERS */

  setLikesDislikesUI() {
    let currentVideoId = this.props.currentVideo.videoId;
    console.log('Current props', this.props.userInfo);
    console.log('currentVideo', currentVideoId);
    if (this.props.authStatus.loggedIn) {
      let preferences = this.props.userInfo;
      if (preferences.userLikes.includes(currentVideoId)) {
        this.changeToLikeUI();
      } else if (preferences.userDislikes.includes(currentVideoId)) {
        this.changeToDislikeUI();
      } else {
        this.resetUI();
      }
    }
  }

  changeToLikeUI() {
    this.setState({
      upvoteIsClicked: true,
      downvoteIsClicked: false
    })
  }

  changeToDislikeUI() {
    this.setState({
      upvoteIsClicked: false,
      downvoteIsClicked: true
    })
  }

  resetUI() {
    this.setState({
      upvoteIsClicked: false,
      downvoteIsClicked: false
    });

  }

  messageNotificationUI(vote){
    if(vote > 0 ) {
      message.success('Liked Video!');
    } else if (vote < 0 ) {
      message.error('Disliked video');
    }
  }

  validatingVotes(vote) {
    console.log("Vote", vote)
    const videoId = this.props.currentVideo.videoId;
    let userDislikes = this.props.userInfo.userDislikes;
    let userLikes = this.props.userInfo.userLikes;
    //If like clicked:
    if (vote > 0) {
      //checks to see if previously disliked, if so, removes from disliked list
      if (userDislikes.includes(videoId)) {
        let filteredDislikes = userDislikes.filter((id) => id !== videoId);
        let updatedLikes = [...userLikes, videoId];
        this.updateDatabaseLikesDislikes(updatedLikes, filteredDislikes);
        this.messageNotificationUI(1);
        this.changeToLikeUI();
        // checks to see user is removing previous like
      } else if ( userLikes.includes(videoId)) {
        let filteredLikes = userLikes.filter((id) => id !== videoId);
        this.updateDatabaseLikesDislikes(filteredLikes, userDislikes);
        this.resetUI();
        //user is liking something new
      } else {
        let updatedLikes = [...userLikes, videoId];
        this.updateDatabaseLikesDislikes(updatedLikes, userDislikes);
        this.messageNotificationUI(1);
        this.changeToLikeUI();
      }
      //if dislike is clicked
    } else if (vote < 0) {
       //checks to see if user is changing from like to dislike
      if (userLikes.includes(videoId)) {
        let filteredLikes = userLikes.filter((id) => id !== videoId);
        let updatedDislikes = [...userDislikes, videoId];
        this.updateDatabaseLikesDislikes(filteredLikes, updatedDislikes);
        this.messageNotificationUI(-1);
        this.changeToDislikeUI();
      //checks to see if user removing previous dislike
      } else if (userDislikes.includes(videoId)) {
        let filteredDislikes = userDislikes.filter((id)=> id !== videoId);
        this.updateDatabaseLikesDislikes(userLikes, filteredDislikes);
        this.resetUI();
      }

      else {
        let updatedDislikes = [...userDislikes, videoId];
        this.updateDatabaseLikesDislikes(userLikes, updatedDislikes);
        this.messageNotificationUI(-1);
        this.changeToDislikeUI();
      }
    } else {
      console.log('Error');
    }
  }

  updateDatabaseLikesDislikes(likes, dislikes) {
    let user = this.props.authStatus.currentUser;
    axios.post('/api/updateUserLikesAndDislikes', {
      params: {
        likes: likes,
        dislikes: dislikes,
        email: user
      }
    })
    .then((response) => {
      this.props.setUserLikes(response.data.liked);
      this.props.setUserDislikes(response.data.disliked);

    })
    .catch((error) => {
      console.log(error);
    });
  }

  sendInfoToEngine(vote) {
    let params = {
      videoId: this.props.currentVideo.videoId,
      vote: vote,
      email: this.props.authStatus.currentUser
    };
    axios.post('/api/voteVideo', {
        params: params
      })
      .then((res) => {
        console.log("VOTED ");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleVoteClick(type) {
  console.log('BEFORE CHANGING LIKES', JSON.stringify(this.props.userInfo));
  if (this.props.authStatus.loggedIn) {
    let vote = 0;
    if ( type > 0) {
      vote = 1;
    } else {
      vote = -1;
    }
    this.validatingVotes(vote);
    this.sendInfoToEngine(vote);
  } else {
    message.error('You need to be logged in to like/dislike videos!');
  }
}

  /* Updates DB with watched video stats */
  upViewCount(videoId) {
    axios.post('/api/upViewCount', {
      params: {
        videoId: videoId
      }
    })
    .then((response) => {
      console.log("View count for ", videoId, "updated: ", response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateUserHistory(videoId) {
    let user = this.props.authStatus.currentUser;
    axios.post('/api/updateUserViewedVideos', {
      params: {
        email: user,
        videoId: videoId
      }
    })
    .then((response) => {
      console.log(videoId, " added to ", user, "s history object.");
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {

    const props = this.props;
    const { currentPlaylist, recentVideos, userInfo, currentVideo, videoCache } = props;
    const { videos } = currentPlaylist;
    const getBookmarkedStatus = () => userInfo.userBookmarks.find(bookmark => bookmark.videoId === currentVideo.videoId);
    const isBookmarked = getBookmarkedStatus();

    function setError () {
      message.success("You've watched all videos in this category, congratulations! Explore other topics or sign up to get your custom Mindfeed playlist.", 4);
    }

    function setCurrentVideo() {
      this.resetUI();
      const counter = currentPlaylist.counter + 1;
      if (counter === videos.length) {
        // Prefetch next round of videos
        if (currentPlaylist.playlistType === 'category' || !currentPlaylist.playlistType) {
          props.getPlaylistByCategory(currentVideo.category);
        }
        if (currentPlaylist.playlistType === 'mindfeed') {
          props.getMindfeedPlaylist(props.authStatus.currentUser)
        }
      } else {
        const newVideo = videos[counter];
        props.updateVideoCounter(counter);
        props.setCurrentVideo(videoCache[newVideo]);
        props.addRecentVideo(currentVideo.videoId);
        this.upViewCount(currentVideo.videoId);
        if (this.props.authStatus.currentUser != 'guest') {
          this.updateUserHistory(videoCache[newVideo].videoId);
        }
      }
      this.setLikesDislikesUI();
    }

    function handleClickHeart() {
      if (props.authStatus.loggedIn ) {
        const bookmarkAdded = function() {
          message.success('Video added to your bookmarks');
        }
        const bookmarkRemoved = function() {
          message.success('Video removed from your bookmarks');
        }
        if (isBookmarked) {
          {bookmarkRemoved()}
          let currentUser = props.authStatus.currentUser;
          axios.post('/api/updateUserBookmarks', {
            params: {
              email: currentUser,
              videoId: currentVideo.videoId,
              action: "remove",
              count: "down"
            }
          })
          .then((response) => {
              axios.get('/api/getAllBookmarkedVideo', {
                params: {
                  email: currentUser
                }
              })
              .then((res) => {
                let newuserBookmarks = res.data.videos;
                props.setUserBookmarks(newuserBookmarks);
              })
          })
          .catch((error) => {
            console.log(error);
          })
        } else {
          {bookmarkAdded()}

          //updates user schema
          let currentUser = props.authStatus.currentUser;
          let currentVideoId = currentVideo.videoId;

          axios.post('/api/updateUserBookmarks', {
            params: {
              email: currentUser,
              videoId: currentVideo.videoId,
              action: "add",
              count: "up"
            }
          })
          .then((response) => {
              axios.get('/api/getAllBookmarkedVideo', {
                params: {
                  email: currentUser
                }
              })
              .then((res) => {
                let newuserBookmarks = res.data.videos;
                props.setUserBookmarks(newuserBookmarks);
              })
          })
          .catch((error) => {
            console.log(error);
          })
        }
      } else {
         message.error('You need to be logged in to bookmark videos');
      }
    }

    return (
      <div>
        <VideoContainer currentVideo={currentVideo}/>
          <MindfeedBar
            handleMindfeedClick={setCurrentVideo.bind(this)}
            handleClickHeart={handleClickHeart}
            handleClickUpVote={this.handleVoteClick.bind(this, 1)}
            handleClickDownVote={this.handleVoteClick.bind(this, -1)}
            isBookmarked={isBookmarked}
            upvotedUI={this.state.upvoteIsClicked}
            downvotedUI={this.state.downvoteIsClicked}
        />
        <Row>
          <Col span={16}>
            <VideoInfo currentVideo={currentVideo} onMindfeed={ this.props.router.location.pathname === '/dashboard/mymindfeed' }/>
          </Col>
          <Col span={8}>
            <h2 className='recentVideosListTitle'>Recently Viewed:</h2>
            <RecentVideos recentVideos={recentVideos} currentVideo={currentVideo}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Connect(Dashboard);
