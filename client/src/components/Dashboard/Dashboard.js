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
    console.log('PROOOOOOOOOOOOOOPS', this.props)
    const { currentPlaylist, mindfeedVideos, categoryVideos, setPlaylistVideos, getPlaylistByCategory, history } = this.props;

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

  resetUI(){
    this.setState({
      upvoteIsClicked: false,
      downvoteIsClicked: false
    });
  }

  messageUI(vote){
    if(vote > 0 ) {
      message.success('Liked Video!');
    } else if (vote < 0 ) {
      message.error('Disliked video >:(');
    }

  }

  sendVoteResponse(){
    // talk to steve
  }

  handleVoteClickUI(vote) {
    if(this.props.authStatus.loggedIn === true) {
        if ( vote > 0 && !this.state.upvoteIsClicked) {
          this.messageUI(vote);
          this.setState(
            {upvoteIsClicked: true,
             downvoteIsClicked: false});
        } else if (vote < 0 && !this.state.downvoteIsClicked) {
          this.messageUI(vote);
          this.setState(
            {upvoteIsClicked: false,
             downvoteIsClicked: true});
        } else {
          this.setState(
            {upvoteIsClicked: false,
             downvoteIsClicked: false});
        }
      } else {
        message.error('You need to be logged in to like/dislike videos!');
      }

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


  render() {
    const props = this.props;
    const { currentPlaylist, recentVideos, bookmarkedVideos, currentVideo, videoCache } = props;
    const { videos } = currentPlaylist;
    const isBookmarked = bookmarkedVideos.includes(currentVideo && currentVideo.videoId);

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
      }
    }

  function handleVoteClick(type) {
    let vote = 0;
    if ( type > 0) {
      vote = 1;
    } else {
      vote = -1;
    }
    this.handleVoteClickUI(vote);
    //can add user if needed
    let params = {videoId:currentVideo.videoId, vote: vote};
    axios.post('/api/voteVideo', {
      params: params
    })
    .then((res)=> {
      console.log("VOTED " + currentVideo.videoId, vote);
    })
    .catch((err)=>{
      console.log(err);
    });
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
          props.removeBookmarkedVideo(currentVideo.videoId);
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
            console.log("Bookmark ", currentVideo.videoId, "removed from user bookmarks.");

          })
          .catch((error) => {
            console.log(error);
          })


        } else {
          console.log("Current Video", currentVideo);
          console.log("current video id", currentVideo.videoId);
          {bookmarkAdded()}

          props.addBookmarkedVideo(currentVideo.videoId);

          //updates user schema
          let currentUser = props.authStatus.currentUser;
          let currentVideoId = currentVideo.videoId;
          console.log("info to be sent", currentUser, currentVideoId);
          let bookmarkedObj = {
            videoId: currentVideo.videoId,
            thumbnail: currentVideo.thumbnail,
            title: currentVideo.title

          }

          axios.post('/api/updateUserBookmarks', {
            params: {
              email: currentUser,
              videoInfo: bookmarkedObj,
              action: "add",
              count: "up"

            }
          })
          .then((response) => {
            console.log("Bookmark ", currentVideo.videoId, "added to user bookmarks.");

          })
          .catch((error) => {
            console.log(error);
          })

        }} else {
           message.error('You need to be logged in bookmark videos');
        }
  }

    return (
      <div>
        <VideoContainer currentVideo={currentVideo}/>
            <MindfeedBar  setCurrentVideo={setCurrentVideo.bind(this)}
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