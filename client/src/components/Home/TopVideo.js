import React, { Component } from 'react';


const TopVideo = function(props) {
  return (
    <div className="topvideo" onClick={() => props.playClickedVideo(props.video)}>
      <div className='home-img-wrapper'>
        <img src={props.video.thumbnail} />
        <div className='home-img-overlay'>
          <img src='https://i.pinimg.com/originals/45/5d/d4/455dd42e78bd3a8ff66b88eb65c815f1.png' />
        </div>
      </div>
    </div>
  )
}

export default TopVideo;
