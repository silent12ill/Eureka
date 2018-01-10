import React, { Component } from 'react';
import { Card } from 'antd';


const BookmarkCard = (props) => {
  return (
    <div>
      <Card className='accountBookmarkCard'>
          <div>
          <img alt="bookmark thumbnail" className="bookmarkThumbnail" src={props.bookmark.thumbnail} />
        </div>
        <div className="bookmarkInfo">
          <h2>{props.bookmark.title}</h2>
          {props.bookmark.description}
        </div>
      </Card>
    </div>
    )
}

export default BookmarkCard;

  // if (props.subcategory === 'Soccer') {
  //   console.log('This is the soccer card');
  //   console.log('ACCOUNT UI' , props.currentUI);

  //   var t = () => {console.log('ACTIVE');}
  //   var f = () => {console.log('INACTIVE');}

  //   props.currentUI? t() : f()
  // }


