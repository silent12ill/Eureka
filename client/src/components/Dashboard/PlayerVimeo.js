import React, { Component } from 'react';



const PlayerVimeo = function(props) {
  return (
    <iframe src={`https://player.vimeo.com/video/${props.videoID}?color=ebebeb&title=0&byline=0&portrait=0&badge=0`} width="840" height="560" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
  )
}

export default PlayerVimeo;