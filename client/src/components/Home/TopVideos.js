import React, { Component } from 'react';
import { Affix, Row, Col, Icon } from 'antd';
import Slider from 'react-slick';
import video from '../../images/videoThumbnail.jpg';

const TopVideos = function(props) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    return (
        <div className='topVideosContainer'>
        <h1 className='title sectionTitle'><a name='explore'>Popular Videos</a></h1>
            <Slider {...settings}>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
            </Slider>
        </div>
    );

}

export default TopVideos;
