import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Affix, Row, Col, Icon } from 'antd';
import video from '../images/videoThumbnail.jpg';
import iconhacks from '../images/iconhacks.png';
import iconhobbies from '../images/iconhobbies.png';
import iconsports from '../images/iconSports.png';
import icontech from '../images/iconTech.png';
import colorex from '../images/colorex.png';

 const HeaderTopics = function(props) {
  return (
    <div className='headerTopicsContainer'>
      <Row type="flex" justify="space-around">
      <div><Icon type="caret-left" className='arrow' /></div>
      <Col span={5}><a href="#"><img src={icontech} className='headertopic' /></a></Col>
      <Col span={5}><a href="#"><img src={iconsports} className='headertopic' /></a></Col>
      <Col span={5}><a href="#"><img src={iconhobbies} className='headertopic' /></a></Col>
      <Col span={5}><a href="#"><img src={iconhacks} className='headertopic' /></a></Col>
      <div><Icon type="caret-right" className='arrow'/></div>
    </Row>

    </div>
  )
}

export default HeaderTopics;

//      <h1 className='title'><a name='explore'>Popular Videos</a></h1>