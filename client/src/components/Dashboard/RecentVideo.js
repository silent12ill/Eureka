import React, { Component } from 'react';
import { Tag } from 'antd';
import Connect from '../Connect';
import video from '../../images/videoThumbnail.jpg';



const RecentVideo = (props) => {
  const playClickedVideo = () => {
    props.setCurrentVideo(props.video);
    props.removeRecentVideo(props.video.videoId);
    props.addRecentVideo(props.currentVideo.videoId);
  }

  return (
    <div className='recentVideo' onClick={ playClickedVideo }>
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

export default Connect(RecentVideo);
