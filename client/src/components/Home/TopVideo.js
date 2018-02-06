import React, { Component } from 'react';
import { Icon } from 'antd';
import playbutton from '../../images/playbutton.png';


const TopVideo = function(props) {
  const playClickedVideo = () => {
    props.setCurrentVideo(props.video);
    if(props.loggedIn) {
      props.history.push(`/dashboard/mymindfeed`);
    } else {
      props.history.push(`/dashboard/${props.video.category.toLowerCase()}`);
    }
  }

  const imageStyle = {
   backgroundImage: `url('${props.video.thumbnail}')`
  }

  return (
    <div className="topvideo" onClick={ playClickedVideo }>
      <div className="topvideo-wrapper" style={ imageStyle }>
        <img className="home-playbutton-overlay" src={ playbutton } />
        <span className="home-stats-overlay"> <Icon type="caret-right"/> {props.video.viewCount} | <Icon type="like-o" /> {props.video.likes} </span> 
      </div>
      <p className="topVideoTitle"> {props.video.title} </p>
    </div>
  )
}


export default TopVideo;