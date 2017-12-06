import React, { Component } from 'react';



const PlayerVimeo = function(props) {
  return (
    <div>
      <iframe src={`"https://player.vimeo.com/video/${videoId}?color=ebebeb&title=0&byline=0&portrait=0&badge=0"`} width="840" height="560" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  )
}

export default PlayerVimeo;