import React, { Component } from 'react';
import RecentVideo from '../Dashboard/RecentVideo';

const AdminVideoQueue = (props) => {
  return (
    <div className='recentVideosContainer'>
      {
        props.videos
          .map((video) => <RecentVideo video={ video } key={ video.videoId } />)
      }
    </div>
  )
}

export default AdminVideoQueue;