import React, { Component } from 'react';
import { Affix, Row, Col, Icon } from 'antd';
import Slider from 'react-slick';
import video from '../../images/videoThumbnail.jpg';
import axios from 'axios';
import TopVideo from './TopVideo';


const TopVideos = function(props) {
  // Need to receive props.playTopVideo
  console.log('TopVideos props', props)

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
        {
          props.topVideos
            .map((video) => {
              return (
                <div key={video.videoId}>
                  <TopVideo video={video} setCurrentVideo={ props.setCurrentVideo } history={ props.history }/>
                </div>
              );
            })
        }
      </Slider>
    </div>
  );
}      

export default TopVideos;
