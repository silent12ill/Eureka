import React, { Component } from 'react';
import { Affix, Row, Col, Icon } from 'antd';
import video from '../images/videoThumbnail.jpg';

const Explore = function() {
  return (
    <div className='exploreContainer'>
      <h1 className='title'><a name='explore'>Popular Videos</a></h1>
      <Row type="flex" justify="space-around">
      <div><Icon type="caret-left" className='arrow' /></div>
      <Col span={4}><img src={video}  className='exampleVideo'/></Col>
      <Col span={4}><img src={video}  className='exampleVideo'/></Col>
      <Col span={4}><img src={video}  className='exampleVideo'/></Col>
      <Col span={4}><img src={video}  className='exampleVideo'/></Col>
      <div><Icon type="caret-right" className='arrow'/></div>
    </Row>

    </div>
  )
}

export default Explore;
