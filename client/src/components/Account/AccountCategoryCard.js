import React, { Component } from 'react';
import { Card } from 'antd';
import lightbulb from '../../images/lightbulb.png';
const clickedUI = {backgroundColor: '#7ec0ee'};
const unclickedUI = {backgroundColor: '#dfe3ee'};

const AccountCategoryCard = (props) => {


  return (
    <div className="accountCategoryItem">
      <Card style={props.currentUI? clickedUI: unclickedUI}>
        <div className="custom-image">
          <img alt="example" src={lightbulb} />
        </div>
        <div className="custom-card">
          <h2>{props.subcategory}
          </h2>
        </div>
      </Card>
    </div>
    )
}

export default AccountCategoryCard;

  // if (props.subcategory === 'Soccer') {
  //   console.log('This is the soccer card');
  //   console.log('ACCOUNT UI' , props.currentUI);

  //   var t = () => {console.log('ACTIVE');}
  //   var f = () => {console.log('INACTIVE');}

  //   props.currentUI? t() : f()
  // }