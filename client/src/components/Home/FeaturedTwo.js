import React, { Component } from 'react';
import { Icon, Col, Row } from 'antd';


const FeaturedTwo = function(props) {
  return (
    <div className='featuredTwoContainer'>
      <h1 className="sectionTitle">Currently</h1>
      <div className='featureTwoInner'>
        <Row>

          <Col span={6}>
            <div className='userStat'>
              <div className='statIcon'><Icon type="smile-o" style={{ fontSize: 105 }}/></div>
              <div className='statText'><div className='statNumber'>670,532</div> Users</div>
            </div>
          </Col>

          <Col span={6}>
            <div className='userStat'>
              <div className='statIcon'><Icon type="play-circle-o" style={{ fontSize: 105 }}/></div>
              <div className='statText'><div className='statNumber'>23,423</div> Total Videos</div>
            </div>
          </Col>

          <Col span={6}>
            <div className='userStat'>
              <div className='statIcon'><Icon type="appstore-o" style={{ fontSize: 105 }}/></div>
              <div className='statText'><div className='statNumber'>116</div> Categories</div>
            </div>
          </Col>

          <Col span={6}>
            <div className='userStat'>
              <div className='statIcon'><Icon type="book" style={{ fontSize: 105 }}/></div>
              <div className='statText'><div className='statNumber'>5,985</div> Bookmarks</div>
            </div>
          </Col>

        </Row>
      </div>
    </div>
  )
}


export default FeaturedTwo;