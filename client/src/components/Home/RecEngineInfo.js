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
            <h1 className="sectionTitle"><a name='personalize'>Personalize Your Mindfeed!</a></h1>
            <div className="recEngineDescInner">
            Here at Mindfeed, we curate the internet's best 5 minute or less videos to teach you something new.  
            To make this experience even better, we invite you to sign up for your own "My Mindfeed" which will be a personalized curation of videos just for you! <br /><br />
            Our recommendation engine takes in your category and subcategory preferences, history of likes and dislikes, and much more to create a constant video playlist feed of videos we believe you'll enjoy and learn the most from! 
            The more you engage with your "My Minfeed" in deeming videos you like and dislike, the better your recommendations become! Get started today! 
            </div>
            { props.loggedIn === false ? (<Signup />) : "" }
          </div>
        </Col>
      </Row>
    </div>
  )
}


export default RecEngineInfo;