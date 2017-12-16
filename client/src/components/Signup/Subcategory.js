import React, { Component } from 'react';



const Subcategory = function(props) {
  return (
    <div>
      <div onClick={() => props.handleAddSubcategory(props.subcategoryName)}>
        <span>{props.subcategoryName}</span> 
      </div>

    </div>
  )
}

export default Subcategory;

// <div className='recentVideo' onClick={() => props.playClickedVideo(props.video)}>
