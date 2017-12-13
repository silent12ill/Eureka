import React, { Component } from 'react';
import { Icon, Tag, Button } from 'antd';


const VideoInfo = function(props) {
  return (
    <div className='videoInfoContainer'>
      <Tag color="blue">{props.currentVideo.category}</Tag> <Tag>{props.currentVideo.subcategory}</Tag> <Button size="small" type="dashed">+ Add Tag</Button><br />
      <span className='videoTitle'>{props.currentVideo.title}</span><br />
      {props.currentVideo.linkType} | {props.currentVideo.createdBy} | {props.currentVideo.dateAdded} <br />
      <div className='reportVideoContainer'>
        <Icon type="notification" className="reportVideoIcon" /> Report Video
      </div>
      <div className='videoStatsContainer'>
        <span className='videoStat'><Icon type="caret-right" style={{ fontSize: 20 }} /> 6032 </span>
        <span className='videoStat'><Icon type="like-o" style={{ fontSize: 20 }} /> 2302 </span>
        <span className='videoStat'><Icon type="heart" style={{ fontSize: 20 }} /> 532 <br /> </span>
      </div>   
      <span className='videoDesc'> {props.currentVideo.description} </span>
    </div>
  )
}


export default VideoInfo;