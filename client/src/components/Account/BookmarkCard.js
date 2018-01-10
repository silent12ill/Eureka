import React, { Component } from 'react';
import { Card } from 'antd';


const BookmarkCard = (props) => {

  return (
    <div>
      <Card className='accountBookmarkCard'>
        <div className="custom-image">
          <img alt="bookmark thumbnail" src={props.video.thumnail} />
        </div>
        <div className="custom-card">
          <h2>{props.video.thumnail}</h2>
          {props.video.description}
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