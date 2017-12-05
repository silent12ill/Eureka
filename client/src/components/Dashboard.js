import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavWhite from './NavWhite';
import '../css/style.css';
import { Layout, Menu, Steps, Icon, Switch, Tag, Button, Row, Col, Radio } from 'antd';
import RecentVideo from './RecentVideo';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import Slider from 'react-slick';

// const appendVideo = function(props) {
//     return props.parseUrlIntoEmbed(props.currentVideo.url);


// }


const Dashboard = function(props) {

  return (
    <div>
      <div className='navbg'>
        <NavWhite currentPage={props.currentPage} loggedIn={props.loggedIn} goToLogin={props.goToLogin} goToSignup={props.goToSignup} goToSubmitVideo={props.goToSubmitVideo} goToAccount={props.goToAccount} handleClickCategory={props.handleClickCategory} logout={props.logout} />
      </div>

      <div className='videoContainer'>
        <div className='videoContainerInner'>
          <div id='videoDisplay' className='videoDisplay'>

          </div>
        </div>
      </div>

      <div className='votingContainer'>
        <a href="#" className='votingIcon shareIcon'><Icon type="share-alt" style={{ fontSize: 40 }} /></a> 
        <a href="#" className='votingIcon frownIcon'><Icon type="dislike-o" style={{ fontSize: 40 }} /></a> 
        <a href="#" className='votingIcon bulbIcon' onClick={props.setCurrentVideo}><Icon type="bulb" style={{ fontSize: 60 }} /></a> 
        <a href="#" className='votingIcon smileIcon' ><Icon type="like-o" style={{ fontSize: 40 }} /></a>
        <a href="#" id='heartIcon' className='votingIcon heartIcon' onClick={props.handleClickHeart}><Icon type="heart" style={{ fontSize: 40 }} /></a> 
      </div>

      <div className='videoInfoBox'>
        <Row>
          <Col span={16}>
            <div className='videoTitleContainer'>
              <Tag color="blue">{props.currentVideo.category}</Tag> <Tag>{props.currentVideo.subcategory}</Tag> <Button size="small" type="dashed">+ Add Tag</Button><br />
              <span className='videoTitle'>{props.currentVideo.title}</span><br />
              {props.currentVideo.linkType} | {props.currentVideo.createdBy} | {props.currentVideo.dateAdded} <br />
              <div className='reportButton'>
                <Icon type="notification" style={{ fontSize: 20, color: 'darkred' }} /> Report Video
              </div>
              <div className='videoStats'>
                <span className='videoStat'><Icon type="caret-right" style={{ fontSize: 20 }} /> 6032 </span>
                <span className='videoStat'><Icon type="like-o" style={{ fontSize: 20 }} /> 2302 </span>
                <span className='videoStat'><Icon type="heart" style={{ fontSize: 20 }} /> 532 <br /> </span>
              </div>            
              <div className='videoDesc'>
                {props.currentVideo.description}
              </div><br />
            </div>
          </Col>
          <Col span={8}>
            <div className='recentlyWatchedVideos'>
              <h2>Recently Viewed:</h2> 
              {props.recentVideos
                .map((video) => <RecentVideo title={video.title} category={video.category} playClickedVideo={props.playClickedVideo}/>)}
            </div>
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default Dashboard;

