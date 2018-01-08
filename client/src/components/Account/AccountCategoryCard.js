import React, { Component } from 'react';
import { Card } from 'antd';
const clickedUI = {backgroundColor: '#7ec0ee'};
const unclickedUI = {backgroundColor: '#dfe3ee'};

const AccountCategoryCard = (props) => {
  if (props.subcategory === 'Soccer') {
    console.log('This is the soccer card');
    console.log('ACCOUNT UI' , props.currentUI);

    var t = () => {console.log('ACTIVE');}
    var f = () => {console.log('INACTIVE');}

    props.currentUI? t() : f()


  }
  return (
    <div>
      <Card style={props.currentUI? clickedUI: unclickedUI}>
        <h2>{props.subcategory}</h2>
      </Card>
    </div>
    )
}

export default AccountCategoryCard;