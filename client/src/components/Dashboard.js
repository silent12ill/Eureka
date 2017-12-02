import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Layout, Menu, Steps, Icon, Switch, Tag, Button } from 'antd';
import DashboardHeader from './DashboardHeader';
import TopVideos from './TopVideos';
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import Slider from 'react-slick';



const Dashboard = function(props) {
    return (
      <div>

        <div className='videoContainer'>
          <div className='videoContainerInner'>
              <div className='videoDisplay'><iframe width="760" height="515" src="https://www.youtube.com/embed/mkpbbWZvYmw" frameborder="0" allowfullscreen></iframe></div>
          </div>
        </div>

        <div className='votingContainer'>
          <RadioGroup defaultValue="a" size="large">
            <RadioButton value="d"><Icon type="share-alt" style={{ fontSize: 20 }} /></RadioButton>
            <RadioButton value="a"><Icon type="frown" style={{ fontSize: 20 }} /></RadioButton>
            <RadioButton value="b"><Icon type="bulb" style={{ fontSize: 20 }} /></RadioButton>
            <RadioButton value="c"><Icon type="smile" style={{ fontSize: 20 }} /></RadioButton>
            <RadioButton value="d"><Icon type="heart" style={{ fontSize: 20 }} /></RadioButton>
          </RadioGroup>
        </div>

        <div className='videoInfoBox'>
          <div className='upcomingVideos'>
          <Switch defaultChecked={false} /> Some switch item? <br />
            list of last 5 videos watched
          </div>
          <div className='videoTitleContainer'>
            <span className='videoTitle'>Recognize the Signs and Symptoms of Stroke </span><br />
            Centers for Disease Control and Prevention (CDC) | Published on Oct 26, 2015  <br />

            <ul className='videoStats'>
              <li><Icon type="caret-right" style={{ fontSize: 20 }} /> 6032 </li>
              <li><Icon type="smile" style={{ fontSize: 20 }} /> 2302 </li>
              <li><Icon type="heart" style={{ fontSize: 20 }} /> 532 <br /> </li>
            </ul>

            <Tag color="blue">{props.currentCategory}</Tag> <Tag>Subcategory</Tag> <Tag>Subcategory</Tag> <Button size="small" type="dashed">+ New Tag</Button><br />
            

            <div className='videoDesc'>When someone is having a stroke, every minute counts. Just as putting out a fire quickly can stop it from spreading, treating a stroke quickly can reduce damage to the brain. If you learn how to recognize the telltale signs of a stroke, you can act quickly and save a life—maybe even your own. </div><br />
          </div>

        </div>



      </div>
    );

}

export default Dashboard;
        // <div className="vidRecContainer">
        //   <DashboardHeader title={props.currentCategory}/>
        //   <TopVideos />
        // </div>