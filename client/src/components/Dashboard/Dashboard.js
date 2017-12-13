import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../css/style.css';
import './dashboard.css';
import NavWhite from '../Nav/NavWhite';
import VideoContainer from './VideoContainer';
import MindfeedBar from './MindfeedBar';
import VideoInfo from './VideoInfo';
import RecentVideos from './RecentVideos';


const Dashboard = function(props) {
  return (
    <div>
      <VideoContainer currentVideo={props.currentVideo}/>
      <MindfeedBar setCurrentVideo={props.setCurrentVideo} handleClickHeart={props.handleClickHeart}/>
      <Row>
        <Col span={16}>
          <VideoInfo currentVideo={props.currentVideo}/>
        </Col>
        <Col span={8}>
          <RecentVideos recentVideos={props.recentVideos} playClickedVideo={props.playClickedVideo} />
        </Col>
      </Row>
    </div>

  );
}


export default Dashboard;