import React, { Component } from 'react';
import Connect from '../Connect';
import imageBulb from '../../images/userbulb.png';
import { Row, Col, Card } from 'antd';

const AccountInfo = (props) => {
  return (
        <div className='accountInfoContainer'>
          <div className='accountInfoCard'>
            <Card>
              <Row>
                <Col span={12}>
                  <div className='userPhoto'>
                    <img src={ imageBulb } alt="userPhoto" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className='userInfo'>
                    <span className='userEmail'>{props.user} </span><br />
                    <span className='userStats'>{props.userInfo.userLikes.length} videos liked. </span><br />
                    <span className='userStats'>{props.userInfo.userBookmarks.length} videos bookmarked.</span>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        </div>

    )
}

export default Connect(AccountInfo);