import React, { Component } from 'react';
import PlayerYouTube from './PlayerYouTube';
import PlayerVimeo from './PlayerVimeo';
import PlayerDailyMotion from './PlayerDailyMotion';


const VideoContainer = function(props) {

  const videoPlayer = function() {
    if (props.currentVideo.linkType === "YouTube") {
      return <PlayerYouTube videoId={props.currentVideo.videoId} />
    } else if (props.currentVideo.linkType === "Vimeo") {
      return <PlayerVimeo videoId={props.currentVideo.videoId} />
    } else if (props.currentVideo.linkType === "DailyMotion") {
      return <PlayerDailyMotion videoId={props.currentVideo.videoId} />
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