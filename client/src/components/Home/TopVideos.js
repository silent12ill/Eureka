import React, { Component } from 'react';
import { Affix, Row, Col, Icon } from 'antd';
import Slider from 'react-slick';
import video from '../../images/videoThumbnail.jpg';
import axios from 'axios';
import Connect from '../Connect';
import TopVideo from './TopVideo';


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
      <h1 className='sectionTitle'>Popular Videos</h1>
      { props.topVideos.length &&
        <Slider {...settings}>
          {
            props.topVideos.slice(0,6)
              .map((video) => {
                return (
                  <div key={video.videoId}>
                    <TopVideo video={video} setCurrentVideo={ props.setCurrentVideo } history={ props.history } loggedIn={ props.authStatus.loggedIn }/>
                  </div>
                );
              })
          }
        </Slider>
      }
    </div>
  );
}      

export default Connect(TopVideos);
