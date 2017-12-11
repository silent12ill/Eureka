import React, { Component } from 'react';
import RecentVideo from './RecentVideo';


const RecentVideos = function(props) {
  return (
	<div className='recentVideosContainer'>
	  <h2>Recently Viewed:</h2> 
	  {props.recentVideos
	    .map((video) => <RecentVideo video={video} key={video._id} title={video.title} category={video.category} playClickedVideo={props.playClickedVideo}/>)}
	</div>
  )
}


export default RecentVideos;