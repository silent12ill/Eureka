import React, { Component } from 'react';
import RecentVideo from './RecentVideo';
import Connect from '../Connect';


const RecentVideos = (props) => {
  return (
    <div className='recentVideosContainer'>
      {
        props.recentVideos
          .map((videoId) => props.videoCache[videoId])
          .map((video) => <RecentVideo video={ video } key={ video.videoId } />)
      }
    </div>
  )
}

RecentVideos.defaultProps = {
  recentVideos: [{ video: { videoId: ''}}]
};


export default Connect(RecentVideos);