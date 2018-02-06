import React, { Component } from 'react';


const PlayerVimeo = function(props) {
  return (
    <iframe src={`https://player.vimeo.com/video/${props.videoId}?color=ebebeb&title=0&byline=0&portrait=0&badge=0&autoplay=1`} width="850" height="570" frameBorder="0" allowFullScreen></iframe>
  )
}


export default PlayerVimeo;