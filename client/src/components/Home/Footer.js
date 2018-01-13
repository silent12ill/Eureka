import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd';



const Footer = function(props) {
  return (
      <div className='footer'>

        <Row className ='footerInner'>
          <Col span={11}>
            <h3>Credits</h3>
            <Icon type="caret-right" style={{color: '#efcc44'}}/> Graphics, Background & Vectors: <a href='https://www.freepik.com'>freepik</a> & <a href='https://www.flaticon.com'>flaticon</a>  <br />
            <Icon type="caret-right" style={{color: '#efcc44'}}/> Design Library: <a href='https://ant.design/'>Ant Design</a> <br />
            <Icon type="caret-right" style={{color: '#efcc44'}}/> Roots: <a href='http://getcoding.hackreactor.com/remote-part-time/'>Hack Reactor - Remote Part Time</a><br />
            <Icon type="caret-right" style={{color: '#efcc44'}}/> Special Thanks: Magee Mooney and Nic Mitchell<br />

          </Col>
          <Col span={13}>
            <h3>Developers</h3>
            Isabella Tea  |  <Icon type="github" style={{ color: '#efcc44' }} /> <a href='https://github.com/isabellatea'> isabellatea </a>  |  <Icon type='mail' style={{ color: '#efcc44' }} /> tea.isabella@gmail.com  |  <Icon type='linkedin' style={{ color: '#efcc44' }} /> <a href="http://linkedin.com/in/isabellatea/"> isabellatea </a> <br />
            Vasanth Kesavan  |  <Icon type="github" style={{ color: '#efcc44' }} /> <a href='https://github.com/Vasanthkesavan'> Vasanthkesavan </a>  |  <Icon type='mail' style={{ color: '#efcc44' }} /> vasanthankesavan@gmail.com  |  <Icon type='linkedin' style={{ color: '#efcc44' }} /> <a href="https://www.linkedin.com/in/vasanthan-kesavan/"> vasanthan-kesavan </a> <br />
            Abishak Kodi  |  <Icon type="github" style={{ color: '#efcc44' }} /> <a href='https://github.com/abishakkodi'> abishakkodi </a>  |  <Icon type='mail' style={{ color: '#efcc44' }} /> abishak.kodi@gmail.com  |  <Icon type='linkedin' style={{ color: '#efcc44' }} /> <a href="https://www.linkedin.com/in/abishakkodi/"> abishakkodi </a> <br />
            Steve Rodriguez  |  <Icon type="github" style={{ color: '#efcc44' }} /> <a href='https://github.com/silent12ill'> silent12ill </a>  |  <Icon type='mail' style={{ color: '#efcc44' }} /> silentcf@gmail.com  |  <Icon type='linkedin' style={{ color: '#efcc44' }} /> <a href="https://www.linkedin.com/in/210steverodriguez/"> 210steverodriguez </a> <br /><br />

          </Col>
        </Row>
        
      </div>
  )
}

export default Footer;


