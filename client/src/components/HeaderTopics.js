import React, { Component } from 'react';
import { Affix, Row, Col, Icon } from 'antd';
import video from '../images/videoThumbnail.jpg';
import iconhacks from '../images/iconhacks.png';
import iconhobbies from '../images/iconhobbies.png';
import iconsports from '../images/iconSports.png';
import icontech from '../images/iconTech.png';

const HeaderTopics = function() {
  return (
    <div className='headerTopicsContainer'>
      <Row type="flex" justify="space-around">
      <div><Icon type="caret-left" className='arrow' /></div>
      <Col span={5}><img src={icontech} className='headertopic' /></Col>
      <Col span={5}><img src={iconsports} className='headertopic' /></Col>
      <Col span={5}><img src={iconhobbies} className='headertopic' /></Col>
      <Col span={5}><img src={iconhacks} className='headertopic' /></Col>
      <div><Icon type="caret-right" className='arrow'/></div>
    </Row>

    </div>
  )
}

export default HeaderTopics;

//      <h1 className='title'><a name='explore'>Popular Videos</a></h1>