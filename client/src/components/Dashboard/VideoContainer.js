import React, { Component } from 'react';
import PlayerYouTube from './PlayerYouTube';
import PlayerVimeo from './PlayerVimeo';
import PlayerDailyMotion from './PlayerDailyMotion';



const VideoContainer = function(props) {

const videoPlayer = function() {
  if (props.currentVideo.linkType === "YouTube") {
    return <PlayerYouTube videoID={props.currentVideo.videoID} />
  } else if (props.currentVideo.linkType === "Vimeo") {
    return <PlayerVimeo videoID={props.currentVideo.videoID} />
  } else if (props.currentVideo.linkType === "DailyMotion") {
    return <PlayerDailyMotion videoID={props.currentVideo.videoID} />
  } else {
    console.log("Invalid video type"); 
  }
}
  return (
    <div className='videoContainer'>
      <div id='videoDisplay' className='videoDisplay'>
        {videoPlayer()}
      </div>
    </div>
  )
}


export default VideoContainer;