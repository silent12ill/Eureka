import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Layout, Menu, Steps, Icon, Switch, Tag, Button, Row, Col, Radio } from 'antd';
import RecentVideo from './RecentVideo';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import Slider from 'react-slick';


const Dashboard = function(props) {



  return (
    <div>


      <div className='videoContainer'>
        <div className='videoContainerInner'>
          <div className='videoDisplay'>
            <iframe width="760" height="515" src={"https://www.youtube.com/embed/mkpbbWZvYmw"} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <div className='votingContainer'>
        <a href="#" className='votingIcon shareIcon'><Icon type="share-alt" style={{ fontSize: 40 }} /></a> 
        <a href="#" className='votingIcon frownIcon'><Icon type="dislike-o" style={{ fontSize: 40 }} /></a> 
        <a href="#" className='votingIcon bulbIcon' onClick={props.nextVideo}><Icon type="bulb" style={{ fontSize: 60 }} /></a> 
        <a href="#" className='votingIcon smileIcon' ><Icon type="like-o" style={{ fontSize: 40 }} /></a>
        <a href="#" id='heartIcon' className='votingIcon heartIcon' onClick={props.handleHeartClick}><Icon type="heart" style={{ fontSize: 40 }} /></a> 
      </div>

      <div className='videoInfoBox'>
        <Row>
          <Col span={16}>
            <div className='videoTitleContainer'>
              <Tag color="blue">a</Tag> <Tag>Subcategory</Tag> <Tag>Subcategory</Tag> <Button size="small" type="dashed">+ Add Subcategory</Button><br />
              <span className='videoTitle'>a</span><br />
              a | a <br />
              <div className='reportButton'>
                <Icon type="notification" style={{ fontSize: 20, color: 'darkred' }} /> Report Video
              </div>
              <div className='videoStats'>
                <span className='videoStat'><Icon type="caret-right" style={{ fontSize: 20 }} /> 6032 </span>
                <span className='videoStat'><Icon type="smile" style={{ fontSize: 20 }} /> 2302 </span>
                <span className='videoStat'><Icon type="heart" style={{ fontSize: 20 }} /> 532 <br /> </span>
              </div>            
              <div className='videoDesc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div><br />
            </div>
          </Col>
          <Col span={8}>
            <div className='recentlyWatchedVideos'>
              <h2>Recently Viewed:</h2> 
                <RecentVideo playClickedVideo={props.playClickedVideo} />
                <RecentVideo playClickedVideo={props.playClickedVideo} />
                <RecentVideo playClickedVideo={props.playClickedVideo} />
                <RecentVideo playClickedVideo={props.playClickedVideo} />
                <RecentVideo playClickedVideo={props.playClickedVideo} />
            </div>
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default Dashboard;
