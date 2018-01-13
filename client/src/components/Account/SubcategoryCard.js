import React, { Component } from 'react';
import { Card } from 'antd';
import lightbulb from '../../images/userbulb.png';



const Subcategory = function(props) {

  const selected = props.allSelected.includes(props.subcategoryName);

  const subcategoryClasses = `subcategory-card${selected ? '-selected' : ''}`;
  return (
    <div className="subcategoryCard" onClick={() => props.handleClickSubcategory(props.subcategoryName)}>
	    <Card className={ subcategoryClasses }>
	    <div className="subcatImage">
	      <img alt="bulb" src={lightbulb} />
	    </div>
	      <div className="subcatName">
	        <h2>{props.subcategoryName} </h2>
	      </div>
	    </Card>
    </div>

  )
}

export default Subcategory;

