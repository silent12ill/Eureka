import React, { Component } from 'react';
import { Row, Col, message } from 'antd';
import axios from 'axios';
import NavWhite from '../Nav/NavWhite';
import VideoContainer from './VideoContainer';
import MindfeedBar from './MindfeedBar';
import VideoInfo from './VideoInfo';
import RecentVideos from '../../containers/RecentVideosContainer';
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
    // if mindfeed videos are queued, use mindfeed as playlist
    // if mindfeed videos is empty, use category as playlist
    const {
      currentPlaylist,
      mindfeedVideos,
      categoryVideos,
      setPlaylistVideos,
      setCurrentVideo,
      getPlaylistByCategory,
      match
    } = this.props;

    const { currentVideo, videos } = currentPlaylist;

    // No playlist has been set
    // Try to first use mindfeedVideos in Redux
    // Fallback to category videos in Redux
    if (!videos.length) {
      if (mindfeedVideos.length) {
        setPlaylistVideos(mindfeedVideos);
      } else if (categoryVideos.length) {
        setPlaylistVideos(categoryVideos);
      }
    }

    if (videos.length && !currentVideo.videoId) {
      setCurrentVideo(videos[0]);
    }
    
    if (currentVideo.videoId && !videos.length) {
      const { category } = currentVideo;
      return getPlaylistByCategory(category);
    }

    if (!currentVideo.videoId && !videos.length) {
      // Get the route and fetch data
      // Categories are stored in the db as Title case (first letter capitalized). 
      // Sanitizing here to make sure the first letter is capitalized.
      const routeCategory = match.params.category;
      const categoryString = `${routeCategory.charAt(0).toUpperCase()}${routeCategory.slice(1)}`;
      getPlaylistByCategory(categoryString);
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

  handleVoteClickUI(vote) {
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
    const { currentPlaylist, recentVideos, bookmarkedVideos } = props;
    const { currentVideo, videos } = currentPlaylist;
    const isBookmarked = bookmarkedVideos.includes(currentVideo && currentVideo.videoId);

    function setError() {
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
            props.setCurrentVideo(newVideo);
            props.addRecentVideo(currentVideo);
            // upViewCount(currentVideo.videoId);
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
          action: remove
        }
      })
      .then((response) => {
        console.log("Bookmark ", videoId, "removed from user bookmarks.");
      })
      .catch((error) => {
        console.log(error);
      })
      //updates video schema
      axios.post('/api/updateBookmarkCount', {
        params: {
          videoId: currentVideo.videoId,
          action: downCount
        }
      })
      .then((response) => {
        console.log("Bookmark count for ", videoId, "downed.");
      })
      .catch((error) => {
        console.log(error);
      })


    } else {
      props.addBookmarkedVideo(currentVideo.videoId);
      {bookmarkAdded()}
      //updates user schema
      let currentUser = props.authStatus.currentUser;
      axios.post('/api/updateUserBookmarks', {
        params: {
          email: currentUser,
          videoId: currentVideo.videoId,
          action: add
        }
      })
      .then((response) => {
        console.log("Bookmark ", videoId, "added to user bookmarks.");
      })
      .catch((error) => {
        console.log(error);
      })
      //updates video schema
      axios.post('/api/updateBookmarkCount', {
        params: {
          videoId: currentVideo.videoId,
          action: upCount
        }
      })
      .then((response) => {
        console.log("Bookmark count for ", videoId, "upped.");
      })
      .catch((error) => {
        console.log(error);
      })
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


export default Dashboard;