import React, { Component } from 'react';



const PlayerDailyMotion = function(props) {
  return (
    <iframe frameBorder="0" width="780" height="570" src={`//www.dailymotion.com/embed/video/${props.videoId}?autoplay=1`} allowFullScreen></iframe>
  )
}

export default PlayerDailyMotion;