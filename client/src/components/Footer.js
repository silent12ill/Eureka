import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd';



const Footer = function(props) {
  return (
      <div className='footer'>

        <Row className ='footerInner'>
          <Col span={8}>
            <h2>About Us</h2>
            <div className='footerAboutUs'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            </div>
          </Col>
          <Col span={8}>
            <h2>Credits</h2>
            <Icon type="caret-right" style={{color: '#efcc44'}}/> Graphics, Background & Vectors: <a href='https://www.freepik.com'>freepik</a> <br />
            <Icon type="caret-right" style={{color: '#efcc44'}}/> Design Library: <a href='https://ant.design/'>Ant Design</a> <br />
            <Icon type="caret-right" style={{color: '#efcc44'}}/> Roots: <a href='http://www.hackreactor.com'>Hack Reactor RPT</a><br />


          </Col>
          <Col span={8}>
            <h2>Get In Touch</h2>
            <Icon type='mail' style={{color: '#efcc44'}}/> Our mailing address? FAN LETTERS! <br />
            <Icon type="phone" style={{color: '#efcc44'}}/> Phone number... who's number... <br />
            <Icon type="mail" style={{color: '#efcc44'}}/> Email woooo <br />
          </Col>
        </Row>
        
      </div>
  )
}

export default Footer;
