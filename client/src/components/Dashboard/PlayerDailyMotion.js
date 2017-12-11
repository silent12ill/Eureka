import React, { Component } from 'react';



const PlayerDailyMotion = function(props) {
  return (
    <iframe frameborder="0" width="780" height="570" src={`//www.dailymotion.com/embed/video/${props.videoID}`} allowFullScreen></iframe>
  )
}

export default PlayerDailyMotion;