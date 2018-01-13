import React, { Component } from 'react';
import { Icon } from 'antd';


const MindfeedBar = function(props) {
  // Highlight the heart if it is bookmarked
  const heartClasses = `barIcon heartIcon${props.isBookmarked ? 'Selected' : ''}`;
  // Need to do this w/ upvote and downvote buttons
  // const upVoted;
  // const downVoted;
  let regularUI   = { fontSize: 40 };
  let upvoteUI    = { fontSize: 40,  color: '#3cba54'};
  let downvoteUI  = { fontSize: 40,  color: '#FF1744'};

  const handleMindfeedClick = () => {
    props.resetUI();
    props.setCurrentVideo();
  }

  return (
    <div className='mindfeedBarContainer'>
      <a href="#" className='barIcon'><Icon type="share-alt" style={{ fontSize: 40 }} /></a>
      <a href="#" className='barIcon' onClick={props.handleClickDownVote}><Icon type="dislike-o" style={props.downvotedUI? downvoteUI : regularUI } /></a>
      <a href="#" className='barIcon mindfeedButton' onClick={handleMindfeedClick}><Icon type="bulb" style={{ fontSize: 60 }} /></a>
      <a href="#" className='barIcon' onClick={props.handleClickUpVote}><Icon type="like-o" style={ props.upvotedUI? upvoteUI : regularUI } /></a>
      <a href="#" id='heart' className={ heartClasses } onClick={props.handleClickHeart}><Icon type="book" style={{ fontSize: 40 }} /></a>
    </div>
  )
}


export default MindfeedBar;


