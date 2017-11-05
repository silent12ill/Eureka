import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
// import options from '../images/options.png';
// import plane from '../images/plane.png';
// import list from '../images/list.png';


const HowItWorks = function() {
  return (
    <div className="howItWorksContainer">
      <h1>How It Works</h1>
      <h3>Description </h3>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <div className="custom-image">

              </div>
              <div className="custom-card">
                <h2>Browse or Start</h2>
                <p>Description</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div className="custom-image">

              </div>
              <div className="custom-card">
                <h2>Select Preferences</h2>
                <p>Description</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div className="custom-image">

              </div>
              <div className="custom-card">
                <h2>Get Recommendations</h2>
                <p>Description</p>
              </div>
            </Card>
          </Col>
          
        </Row>
      </div>
  )
}

export default HowItWorks;

                // <img alt="example" width="100%" src={list} />
