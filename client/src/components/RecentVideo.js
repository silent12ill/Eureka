import React, { Component } from 'react';
import video from '../images/videoThumbnail.jpg';


const RecentVideo = function() {
  return (
    <div className='recentVideo'>
      <img src={video} />
      <span className='recentVideoTitle'>recent video title</span> <br />
      <span className='recentVideoCategory'>recent video category</span>



    </div>
  )
}

export default RecentVideo;
