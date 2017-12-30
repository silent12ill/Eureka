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


const Dashboard = function(props) {
  const { currentPlaylist, recentVideos, bookmarkedVideos } = props;
  const { currentVideo, videos } = currentPlaylist;
  const isBookmarked = bookmarkedVideos.includes(currentVideo.videoId);
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
      // upViewCount(newVideo.videoId);
    }
  }

  function upViewCount (videoId) {
    //post request to db upping the viewed videos's view count
    //send to video? send to user object? send how?
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
    } else {
      props.addBookmarkedVideo(currentVideo.videoId);
      {bookmarkAdded()}
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


export default Dashboard;