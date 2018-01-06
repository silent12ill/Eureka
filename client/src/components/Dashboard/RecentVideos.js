import React, { Component } from 'react';
import RecentVideo from './RecentVideo';


const RecentVideos = function(props) {
	console.log("Recent Videos", props.recentVideos);
  return (
	<div className='recentVideosContainer'>
	  {
      props.recentVideos
	     .map((video) => <RecentVideo video={video} key={video.videoId} playClickedVideo={props.playClickedVideo}/>)
    }
	</div>
  )
}


export default RecentVideos;