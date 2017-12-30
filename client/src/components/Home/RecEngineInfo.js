import React, { Component } from 'react';
import { Col, Row } from 'antd';
import Signup from '../Signup/Signup';
import gears from '../../images/gears.png';


const RecEngineInfo = function(props) {
  return (
    <div className='recEngineContainer'>
      <Row>
        <Col span={8}>
          <img src={gears} className='gears' alt='recGears'/>
        </Col>
        <Col span={16}>
          <div className="recEngineDesc">
          <h1 className="sectionTitle"><a name='personalize'>Personalize Your MindFeed</a></h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          <Signup />

          </div>
        </Col>
      </Row>
    </div>
  )
}


export default RecEngineInfo;