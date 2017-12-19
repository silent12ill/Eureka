import React, { Component } from 'react';
import { Icon } from 'antd';


const Category = function(props) {
  return (
    <div className="categoryItem" onClick={() => props.handleClickCategory(props.categoryName)}>
      <span>{props.categoryName} <Icon type="right" /></span> 
    </div>
  )
}

export default Category;


