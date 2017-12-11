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
      <div className='navbg'>
        <NavWhite currentPage={props.currentPage} loggedIn={props.loggedIn} goToLogin={props.goToLogin} goToSignup={props.goToSignup} goToSubmitVideo={props.goToSubmitVideo} goToAccount={props.goToAccount} handleClickCategory={props.handleClickCategory} logout={props.logout} />
      </div>

      <VideoContainer />
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