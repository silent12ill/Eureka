import React, { Component } from 'react';



const PlayerDailyMotion = function(props) {
  return (
    <div>
      <iframe frameborder="0" width="780" height="570" src={`"//www.dailymotion.com/embed/video/${videoId}"`} allowfullscreen></iframe>
    </div>
  )
}

export default PlayerDailyMotion;