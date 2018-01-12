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
    const { currentPlaylist, mindfeedVideos, currentVideo, categoryVideos, setPlaylistVideos, getPlaylistByCategory, history } = this.props;

    if (!currentPlaylist.videos.length) {
      if (mindfeedVideos.length) {
        setPlaylistVideos(mindfeedVideos);
      } else if (categoryVideos.length) {
        setPlaylistVideos(categoryVideos);
      } else {
        const category = this.resolveCategory();
        if (category) {
          getPlaylistByCategory(category);
        } else {
          history.replace('/');
        }
      }
    }

    if (this.props.authStatus.currentUser != 'guest') {
      this.updateUserHistory(currentVideo.videoId);
    }
  }

  /*
    UI HANDLERS
  */

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

  resolveCategory() {
    const { currentVideo, match } = this.props;
    const categoryRoute = match.params.category;
    return currentVideo.category || this.capitalize(categoryRoute);
  }

  capitalize(string) {
    // Categories are stored in the db as Title case (first letter capitalized).
    // Sanitizing here to make sure the first letter is capitalized.
    return string && `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }

 componentDidUpdate(prevProps) {
    // If navigating from the Nav Bar, check if the category
    // has changed. If so, update the playlist.
    const currentCategory = this.props.match.params.category;
    const previousCategory = prevProps.match.params.category;
    if (currentCategory !== previousCategory) {
      const category = this.capitalize(currentCategory);
      this.props.getPlaylistByCategory(category);
    }
  }

  messageNotificationUI(vote){
    if(vote > 0 ) {
      message.success('Liked Video!');
    } else if (vote < 0 ) {
      message.error('Disliked video >:(');
    }
  }



  validatingVotes(vote) {
    console.log("Vote", vote)
    const videoId = this.props.currentVideo.videoId;
    let userDislikes = this.props.userInfo.userDislikes;
    let userLikes = this.props.userInfo.userLikes;
    console.log('VIDEO IDDDDDDDD', videoId, 'DISLIKEEEEEEEEEEEES', JSON.stringify(userDislikes), 'LIKESSSSSSSSSSSSS', JSON.stringify(userLikes));
    //If like clicked:
    if (vote > 0) {
      //checks to see if previously disliked, if so, removes from disliked list
      if (userDislikes.includes(videoId)) {
        console.log('IN SWAP DISLIKE TO LIKE VIDEO');
        let filteredDislikes = userDislikes.filter((id) => id !== videoId);
        console.log('FILTERED DISLIKE', filteredDislikes);
        let updatedLikes = [...userLikes, videoId];
        this.updateDatabaseLikesDislikes(updatedLikes, filteredDislikes);
        this.messageNotificationUI(1);
        this.changeToLikeUI();
        // checks to see user is removing previous like
      } else if ( userLikes.includes(videoId)) {
        console.log('IN REMOVE LIKED VIDEO');
        let filteredLikes = userLikes.filter((id) => id !== videoId);
        console.log('FILTERED LIKES', filteredLikes);
        this.updateDatabaseLikesDislikes(filteredLikes, userDislikes);
        this.resetUI();
        //user is liking something new
      } else {
        console.log('IN LIKE VIDEO + VIDEO ID', videoId);
        console.log('USERLIKES', userLikes);
        let updatedLikes = [...userLikes, videoId];
        console.log('Updated Likes with Redux data', updatedLikes);
        console.log('Updated Likes with current videoID', updatedLikes);
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
      console.log('Wow impressive you managed to break this');
    }
  }

  updateDatabaseLikesDislikes(likes, dislikes) {
    let user = this.props.authStatus.currentUser;
    console.log('likes to be sent to db', likes);
    console.log('dislikes to be sent to db',  dislikes);

    axios.post('/api/updateUserLikesAndDislikes', {
        params: {
          likes: likes,
          dislikes: dislikes,
          email: user
        }
      })
      .then((response) => {
        console.log("RESPONSE FROM DB",response.data);
        this.props.setUserLikes(response.data.liked);
        this.props.setUserDislikes(response.data.disliked);
        console.log('AFTER CHANGING LIKES', JSON.stringify(this.props.userInfo));

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
      message.error('Out of Videos... Developers need to write a prefetch!', 10);
    }

    function setCurrentVideo() {
      this.resetUI();
      // Use counter to keep track of where we are
      // in the playlist
      const counter = currentPlaylist.counter + 1;
      if (counter === videos.length) {
        // TODO: Need to prefetch next round of videos
        setError();
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

  function handleVoteClick(type) {
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

      function handleClickHeart() {

      if (props.authStatus.loggedIn === true) {
        const bookmarkAdded = function() {
          message.success('Video added to your bookmarks');
        }
        const bookmarkRemoved = function() {
          message.success('Video removed from your bookmarks');
        }
        // TODO: Need to send POST request with video ID
        // and username to add/remove bookmark in backend
        if (isBookmarked) {
          // props.removeBookmarkedVideo(currentVideo.videoId);
          {bookmarkRemoved()}
          //updates user schema
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
                console.log('list of bookmarks:', newuserBookmarks);
                props.setUserBookmarks(newuserBookmarks);
              })
          })
          .catch((error) => {
            console.log(error);
          })
        } else {
          console.log("Current Video", currentVideo);
          console.log("current video id", currentVideo.videoId);
          {bookmarkAdded()}

          //updates user schema
          let currentUser = props.authStatus.currentUser;
          let currentVideoId = currentVideo.videoId;
          console.log("info to be sent", currentUser, currentVideoId);

          axios.post('/api/updateUserBookmarks', {
            params: {
              email: currentUser,
              videoId: currentVideo.videoId,
              action: "add",
              count: "up"
            }
          })
          .then((response) => {
            console.log("Bookmark ", currentVideo.videoId, "added to user bookmarks.");
              axios.get('/api/getAllBookmarkedVideo', {
                params: {
                  email: currentUser
                }
              })
              .then((res) => {
                let newuserBookmarks = res.data.videos;
                console.log('list of bookmarks:', newuserBookmarks);
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
            setCurrentVideo={setCurrentVideo.bind(this)}
            handleClickHeart={handleClickHeart}
            handleClickUpVote={handleVoteClick.bind(this, 1)}
            handleClickDownVote={handleVoteClick.bind(this, -1)}
            isBookmarked={isBookmarked}
            upvotedUI={this.state.upvoteIsClicked}
            downvotedUI={this.state.downvoteIsClicked}
        />
        <Row>
          <Col span={16}>
            <VideoInfo currentVideo={currentVideo}/>
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