import React, { Component } from 'react';



const PlayerYouTube = function(props) {
  return (
    <div>
      <iframe width="760" height="515" src={`"https://www.youtube.com/embed/${props.videoId}"`} frameborder="0" allowfullscreen></iframe>
    </div>
  )
}

export default PlayerYouTube;
