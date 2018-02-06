import React, { Component } from 'react';
import { Col, Row } from 'antd';
import logoYT from '../../images/logoyoutube.png';
import logoV from '../../images/logovimeo.png';
import logoDM from '../../images/logodailymotion.png';

const FeaturedOne = function(props) {
  return (
    <div className='featuredOneContainer'>
      <h1 className="sectionTitle">Contribute To Mindfeed!</h1>
      <div className='innerText'>                     
        We currently curate our video collection from Youtube, Vimeo, and DailyMotion.  While we are constantly searching and adding the best quality videos, users also have the opportunity to contribute videos to the Mindfeed video library! Upon signing up, navigate to the Submit Video area and submit to us your favorite videos!
      </div>

      <div className="logoContainer">
        <img src={ logoYT } alt="youtube" />
        <img src={ logoV } alt="vimeo" />
        <img src={ logoDM } alt="dailymotion" />
      </div>
        
    </div>
  )
}


export default FeaturedOne;
