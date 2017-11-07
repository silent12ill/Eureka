import React, { Component } from 'react';
import { Affix, Row, Col, Icon } from 'antd';
import hex from '../images/hex.jpg';
import hexbg from '../images/hexagonbg.png';
import video from '../images/videoThumbnail.jpg';

const TopVideos = function() {
  return (
    <div className='topVideosContainer'>
      <h1 className='title'><a name='explore'>Popular Videos</a></h1>
	      <div className='topVideosContainerInner'>
		      <Icon type="caret-left" className='arrowTop' />
		      <img src={video} className='exampleVideo' />
					<img src={video} className='exampleVideo' />
					<img src={video} className='exampleVideo' />
					<img src={video} className='exampleVideo' />
					<img src={video} className='exampleVideo' />
					<Icon type="caret-right" className='arrowTop' />
				</div>
    </div>
  )
}

export default TopVideos;


    //   <Row type="flex" justify="space-around">
    //   <div><Icon type="caret-left" className='arrowTop' /></div>
    //   <Col span={6}><img src={video} className='exampleVideo' /></Col>
    //   <Col span={6}><img src={video} className='exampleVideo' /></Col>
    //   <Col span={6}><img src={video} className='exampleVideo' /></Col>
    //   <Col span={6}><img src={video} className='exampleVideo' /></Col>

    //   <div><Icon type="caret-right" className='arrowTop'/></div>
    // </Row>