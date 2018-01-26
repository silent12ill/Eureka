import React, { Component } from 'react';
import { Card } from 'antd';
import Connect from '../Connect';


const BookmarkCard = (props) => {
  const playClickedBookmark = () => {
    props.setCurrentVideo(props.bookmark);
    props.history.push(`/dashboard/${props.bookmark.category}`);
  }
  const cutDescription = (description) => {
          if(description && description.length > 200) {
              description = description.slice(0, 199) + '...';
              return description;
          } else {
              return description
          }
  }
  return (
    <div className='bookmarksContainer'>
      <Card className='accountBookmarkCard' onClick={ playClickedBookmark }>
        <img alt="bookmarkThumbnail" src={props.bookmark.thumbnail} />
        <div className="bookmarkInfo">
          <h3>{props.bookmark.title}</h3> 
          {cutDescription(props.bookmark.description)}
        </div>
      </Card>
    </div>
  )
}


export default Connect(BookmarkCard);


