import React, { Component } from 'react';
import { Card } from 'antd';



const BookmarkCard = (props) => {
  function cutDescription(description) {
          if(description.length > 200) {
              description = description.slice(0, 199) + '...';
          } else {
              return description
          }
          return description;
      }

  return (
    <div className='bookmarksContainer'>

      <Card className='accountBookmarkCard'>
        
        <img alt="bookmarkThumbnail" src={props.bookmark.thumbnail} />
        <div className='img-overlay'>
          <img src='https://i.pinimg.com/originals/45/5d/d4/455dd42e78bd3a8ff66b88eb65c815f1.png' />
        </div>

        <div className="bookmarkInfo">
          <h3>{props.bookmark.title}</h3> 
          {cutDescription(props.bookmark.description)}
        </div>

      </Card>

    </div>
    )
}

export default BookmarkCard;


