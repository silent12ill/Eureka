import React, { Component } from 'react';
import { Col, Row } from 'antd';
import logoYT from '../../images/logoyoutube.png';
import logoV from '../../images/logovimeo.png';
import logoDM from '../../images/logodailymotion.png';

const FeaturedOne = function(props) {
  return (
    <div className='featuredOneContainer'>
      <h1 className="sectionTitle">Contribute To Mindfeed!</h1>
      <div className='innerText'>                     
        We currently curate our video collection from Youtube, Vimeo, and DailyMotion.  While we are constantly searching and adding the best quality videos, users also have the opportunity to contribute videos to the Mindfeed video library! Upon signing up, navigate to the Submit Video area and submit to us your favorite videos!
      </div>

      <div className="logoContainer">
        <img src={ logoYT } alt="youtube" />
        <img src={ logoV } alt="vimeo" />
        <img src={ logoDM } alt="dailymotion" />
      </div>
        
    </div>
  )
}


export default FeaturedOne;


// <Row>
//           <Col span={6}>
//           <div className='member'>
//             <img src={member3} /><br />
//             <h2>Vasanth K.</h2> <br />
//             <h3>I love MindFeed! It feeds my mind soooo gooooood. Like really, I like it so much. So so much.</h3>
//           </div>
//           </Col>
//           <Col span={6}>
//           <div className='member'>
//             <img src={member2} /><br />
//             <h2>Abishak K.</h2> <br />
//             <h3>MindFeed is all I do errday everyday. On the train, bus, and in life! Just watch videos people!</h3>
//           </div>
//           </Col>
//           <Col span={6}>
//           <div className='member'>
//             <img src={member4} /><br />
//             <h2>Steve R.</h2> <br />
//             <h3>Wait, what is MindFeed? Oh this thing? Yah it's cool. JK I LOVE THIS THING.</h3>
//           </div>
//           </Col>
//           <Col span={6}>
//           <div className='member'>
//             <img src={member1} /><br />
//             <h2>Isabella T.</h2> <br />
//             <h3>Good way to pass time and learn stuff. Random stuff. Super random stuff. But good random stuff. Right? </h3>
//           </div>
//           </Col>
//         </Row>