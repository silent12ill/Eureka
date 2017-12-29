import React, { Component } from 'react';
import { Icon, Tag, Button } from 'antd';


const VideoInfo = function(props) {
  return (
    <div className='videoInfoContainer'>
      <Tag color="blue">{ props.currentVideo.category || props.category } </Tag> <Tag>{ props.currentVideo.subcategory || props.subcategory }</Tag> <br />
      <span className='videoTitle'>{props.currentVideo.title}</span><br />
      {props.currentVideo.linkType} | {props.currentVideo.createdBy} | {props.currentVideo.dateCreated} <br />
      <div className='reportVideoContainer'>
        <Icon type="notification" className="reportVideoIcon" /> Report Video
      </div>
      <div className='videoStatsContainer'>
        <span className='videoStat'><Icon type="caret-right" style={{ fontSize: 20 }} /> {props.currentVideo.viewCount} </span>
        <span className='videoStat'><Icon type="like-o" style={{ fontSize: 20 }} /> {props.currentVideo.likes} </span>
        <span className='videoStat'><Icon type="heart" style={{ fontSize: 20 }} /> {props.currentVideo.bookmarked} <br /> </span>
      </div>   
      <span className='videoDesc'> {props.currentVideo.description} </span>
    </div>
  )
}


export default VideoInfo;