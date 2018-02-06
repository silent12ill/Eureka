import React, { Component } from 'react';
import { Icon } from 'antd';
import Connect from '../Connect';

const MindfeedBar = function(props) {
  const heartClasses = `barIcon heartIcon${props.isBookmarked ? 'Selected' : ''}`;

  let regularUI   = { fontSize: 40 };
  let upvoteUI    = { fontSize: 40,  color: '#3cba54'};
  let downvoteUI  = { fontSize: 40,  color: '#FF1744'};
  let mindfeedUI  = { fontSize: 40,  color: '#ffd219'};

  const handleMindfeedClick = () => {
    props.handleMindfeedClick();
  }

  return (
    <div className='mindfeedBarContainer'>
      <a href="#" className='barIcon'><Icon type="share-alt" style={{ fontSize: 40 }} /></a>
      <a href="#" className='barIcon' onClick={props.handleClickDownVote}><Icon type="dislike-o" style={props.downvotedUI? downvoteUI : regularUI } /></a>
      <a href="#" className='barIcon mindfeedButton' onClick={handleMindfeedClick} style={props.router.location.pathname === '/dashboard/mymindfeed'? mindfeedUI : regularUI }><Icon type="bulb" style={{ fontSize: 60 }} /></a>
      <a href="#" className='barIcon' onClick={props.handleClickUpVote}><Icon type="like-o" style={ props.upvotedUI? upvoteUI : regularUI } /></a>
      <a href="#" id='heart' className={ heartClasses } onClick={props.handleClickHeart}><Icon type="book" style={{ fontSize: 40 }} /></a>
    </div>
  )
}


export default Connect(MindfeedBar);


