import React, { Component } from 'react';
import RecentVideo from './RecentVideo';


const RecentVideos = function(props) {
  return (
	<div className='recentVideosContainer'>
	  
	  {props.recentVideos
	    .map((video) => <RecentVideo video={video} key={video._id} title={video.title} category={video.category} playClickedVideo={props.playClickedVideo}/>)}
	</div>
  )
}


export default RecentVideos;