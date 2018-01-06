import React, { Component } from 'react';


const TopVideo = function(props) {

  const playClickedVideo = () => {
    props.setCurrentVideo(props.video);
    props.history.push("/dashboard");
  }

  return (
    <div className="topvideo" onClick={ playClickedVideo }>
      <div className='home-wrapper hvr-sweep-to-top'>
        <img src={ props.video.thumbnail } /> <br />
        <div className='home-img-overlay'>
          <img src='https://i.pinimg.com/originals/45/5d/d4/455dd42e78bd3a8ff66b88eb65c815f1.png' />
        </div>
          <p className='home-title-overlay'> {props.video.title} </p>
      </div>
    </div>
  )
}

export default TopVideo;
