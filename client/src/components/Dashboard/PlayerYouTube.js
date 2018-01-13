import React, { Component } from 'react';



const PlayerYouTube = function(props) {
  return (
      <iframe width="815" height="570" src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
  )
}

export default PlayerYouTube;
