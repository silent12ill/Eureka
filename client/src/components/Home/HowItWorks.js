import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import magnifying from '../../images/magnifying.png';
import lightbulb from '../../images/lightbulb.png';
import list from '../../images/list.png';


const HowItWorks = function(props) {
  return (
    <div className="howItWorksContainer">
      <h1 className="sectionTitle"><a name='howitworks'>How It Works</a></h1>
      <h3>A cool description about how the process of selecting and recommending works. </h3>
      <div className='howItWorksContainerInner'>

        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src={magnifying} />
              </div>
              <div className="custom-card">
                <h2>Browse or Start</h2>
                <p>Check out the content and sign up to start being cool!</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src={list} />
              </div>
              <div className="custom-card">
                <h2>Select Preferences</h2>
                <p>Customize your preferences and what you'd like to watch and learn.</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src={lightbulb} />
              </div>
              <div className="custom-card">
                <h2>Get Recommendations</h2>
                <p>Get a customized list over time and contribute videos too.</p>
              </div>
            </Card>
          </Col>
        </Row>

        


      </div>
    </div>
  )
}

export default HowItWorks;

          // <Row>
          //   <Col span={10} className="topleft"><img src={magnifying} /></Col>
          //   <Col span={14} className="topright">Watch videos by category</Col>
          // </Row>
          // <Row>
          //   <Col span={12} className="middleleft">Mindfeed stuff</Col>
          //   <Col span={12} className="middleright"><img src={list} /></Col>
          // </Row>
          // <Row>
          //   <Col span={10} className="bottomleft">Contribute to our videos!</Col>
          //   <Col span={14} className="bottomright"><img src={lightbulb} /></Col>
          // </Row>

