import React, { Component } from 'react';
import { Row, Col, message } from 'antd';
import axios from 'axios';
import NavWhite from '../Nav/NavWhite';
import VideoContainer from './VideoContainer';
import MindfeedBar from './MindfeedBar';
import VideoInfo from './VideoInfo';
import RecentVideos from './RecentVideos';
import '../../css/style.css';
import './dashboard.css';


class Dashboard extends React.Component {

  componentWillMount() {
    // if mindfeed videos are queued, use mindfeed as playlist
    // if mindfeed videos is empty, use category as playlist

    const { 
      currentPlaylist,
      mindfeedVideos,
      categoryVideos,
      setPlaylistVideos,
      setCurrentVideo,
      getPlaylistByCategory 
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
      getPlaylistByCategory(category);
    }
  }

  render() {
    const props = this.props;
    const { currentPlaylist, recentVideos, bookmarkedVideos } = props;
    const { currentVideo, videos } = currentPlaylist;
    const isBookmarked = bookmarkedVideos.includes(currentVideo && currentVideo.videoId);

    function setError () {
      message.error('Out of Videos... Developers need to write a prefetch!', 10);
    }

    function setCurrentVideo () {
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

    function upViewCount(videoId) {
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
      })
    }


    function handleClickHeart () {
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
        <MindfeedBar setCurrentVideo={setCurrentVideo} handleClickHeart={handleClickHeart} isBookmarked={isBookmarked} />
        <Row>
          <Col span={16}>
            <VideoInfo currentVideo={currentVideo}/>
          </Col>
          <Col span={8}>
            <h2 className='recentVideosListTitle'>Recently Viewed:</h2> 
            <RecentVideos recentVideos={recentVideos} playClickedVideo={props.playClickedVideo} />
          </Col>
        </Row>
      </div>
    );
  }
}


export default Dashboard;