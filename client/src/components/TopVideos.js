import React, { Component } from 'react';
import { Affix, Row, Col, Icon } from 'antd';
import video from '../images/videoThumbnail.jpg';
import Slider from 'react-slick';
import iconhacks from '../images/iconhacks.png';
import iconhobbies from '../images/iconhobbies.png';
import iconsports from '../images/iconSports.png';
import icontech from '../images/iconTech.png';

const TopVideos = function(props) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className='topVideosContainer'>
        <h1 className='title'><a name='explore'>Popular Videos</a></h1>
            <Slider {...settings}>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
              <div><img src={video} className='exampleVideo' /></div>
            </Slider>
        </div>
      </div>
    );

}

export default TopVideos;

              
// const TopVideos = function() {
//   return (
//     <div className='topVideosContainer'>
//       <h1 className='title'><a name='explore'>Popular Videos</a></h1>
// 	      <div className='topVideosContainerInner'>
// 		      <Icon type="caret-left" className='arrowTop' />
// 		      <img src={video} className='exampleVideo' />
// 					<img src={video} className='exampleVideo' />
// 					<img src={video} className='exampleVideo' />
// 					<img src={video} className='exampleVideo' />
// 					<img src={video} className='exampleVideo' />
// 					<img src={video} className='exampleVideo' />
// 					<img src={video} className='exampleVideo' />
					
// 					<Icon type="caret-right" className='arrowTop' />
// 				</div>
//     </div>
//   )
// }

// export default TopVideos;


    //   <Row type="flex" justify="space-around">
    //   <div><Icon type="caret-left" className='arrowTop' /></div>
    //   <Col span={6}><img src={video} className='exampleVideo' /></Col>
    //   <Col span={6}><img src={video} className='exampleVideo' /></Col>
    //   <Col span={6}><img src={video} className='exampleVideo' /></Col>
    //   <Col span={6}><img src={video} className='exampleVideo' /></Col>

    //   <div><Icon type="caret-right" className='arrowTop'/></div>
    // </Row>