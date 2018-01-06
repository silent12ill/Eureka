import React, { Component } from 'react';
import { Card } from 'antd';
import lightbulb from '../../images/lightbulb.png';

const Subcategory = function(props) {
  return (
    <div className="subcategoryItem" onClick={() => props.handleClickSubcategory(props.subcategoryName)}>
	    <Card className="walkthrough-card">
	      <div className="custom-image">
	        <img alt="example" src={lightbulb} />
	      </div>
	      <div className="custom-card">
	        <h2>{props.subcategoryName} </h2>
	      </div>
	    </Card>
    </div>

  )
}

export default Subcategory;

