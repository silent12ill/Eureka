import React, { Component } from 'react';
import video from '../../images/videoThumbnail.jpg';
import { Tag } from 'antd';


const RecentVideo = function(props) {
  return (
    <div className='recentVideo' onClick={() => props.playClickedVideo(props.video)}>
      <div className='img-wrapper'>
        <img src={ props.video.thumbnail } />
        <div className='img-overlay'>
          <img src='https://i.pinimg.com/originals/45/5d/d4/455dd42e78bd3a8ff66b88eb65c815f1.png' />
        </div>
      </div>
      <span className='recentVideoTitle'>{ props.video.title }</span> <br />
      {props.video.category && (
        <span className='recentVideoCategory'><Tag color="blue">{ props.video.category }</Tag></span>
      )}
      {props.video.subcategory && (
	    <span className='recentVideoCategory'><Tag>{ props.video.subcategory }</Tag></span>
      )}
    </div>
  )
}

export default RecentVideo;
