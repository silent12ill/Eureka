import React, { Component } from 'react';
import { Icon } from 'antd';


const MindfeedBar = function(props) {
  // Highlight the heart if it is bookmarked
  const heartClasses = `barIcon heartIcon${props.isBookmarked ? 'Selected' : ''}`;
  // Need to do this w/ upvote and downvote buttons


  return (
    <div className='mindfeedBarContainer'>
      <a href="#" className='barIcon'><Icon type="share-alt" style={{ fontSize: 40 }} /></a>
      <a href="#" className='barIcon' onClick={props.handleClickDownVote}><Icon type="dislike-o" style={{ fontSize: 40 }} /></a>
      <a href="#" className='barIcon mindfeedButton' onClick={props.setCurrentVideo}><Icon type="bulb" style={{ fontSize: 60 }} /></a>
      <a href="#" className='barIcon' onClick={props.handleClickUpVote}><Icon type="like-o" style={{ fontSize: 40 }} /></a>
      <a href="#" id='heart' className={ heartClasses } onClick={props.handleClickHeart}><Icon type="heart" style={{ fontSize: 40 }} /></a>
    </div>
  )
}


export default MindfeedBar;


