import React, { Component } from 'react';



const Subcategory = function(props) {
  return (
    <div className="subcategoryItem" onClick={() => props.handleClickSubcategory(props.subcategoryName)}>
      <span>{props.subcategoryName}</span> 
    </div>

  )
}

export default Subcategory;

