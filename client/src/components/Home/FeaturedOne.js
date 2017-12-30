import React, { Component } from 'react';
import { Col, Row } from 'antd';
import member1 from '../../images/member1.jpeg';
import member2 from '../../images/member2.png';
import member3 from '../../images/member3.jpeg';
import member4 from '../../images/member4.jpeg';

const FeaturedOne = function(props) {
  return (
    <div className='featuredOneContainer'>
      <h1 className="sectionTitle">Featured Members!</h1>                    
        <Row>
          <Col span={6}>
          <div className='member'>
            <img src={member3} /><br />
            <h2>Vasanth K.</h2> <br />
            <h3>I love MindFeed! It feeds my mind soooo gooooood. Like really, I like it so much. So so much.</h3>
          </div>
          </Col>
          <Col span={6}>
          <div className='member'>
            <img src={member2} /><br />
            <h2>Abishak K.</h2> <br />
            <h3>MindFeed is all I do errday everyday. On the train, bus, and in life! Just watch videos people!</h3>
          </div>
          </Col>
          <Col span={6}>
          <div className='member'>
            <img src={member4} /><br />
            <h2>Steve R.</h2> <br />
            <h3>Wait, what is MindFeed? Oh this thing? Yah it's cool. JK I LOVE THIS THING.</h3>
          </div>
          </Col>
          <Col span={6}>
          <div className='member'>
            <img src={member1} /><br />
            <h2>Isabella T.</h2> <br />
            <h3>Good way to pass time and learn stuff. Random stuff. Super random stuff. But good random stuff. Right? </h3>
          </div>
          </Col>
        </Row>
    </div>
  )
}


export default FeaturedOne;