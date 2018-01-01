import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { Button } from 'antd';
import { Affix, Row, Col, Icon } from 'antd';
import bluebulb from '../../images/bluebulb.png';

import headerdiy from '../../images/header-diy.png';
import headerfashion from '../../images/header-fashion.png';
import headerscience from '../../images/header-science.png';
import headersports from '../../images/header-sports.png';
import headertechnology from '../../images/header-technology.png';




const Header = function(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
      <div className='headerContainer'>
      <img src={bluebulb} className='bulb'/>
        <div className='headerTitle'>
          Mind Feed
        </div>
        <div className='headerSubtitle'>
          The internet's best videos to teach you something new, all under 5 minutes!
        </div>
        <div className='headerTopicsContainer'>
          <Slider {...settings}>
            <div><Link to="/dashboard/sports"><img src={headersports} className='headertopic' name='Sports' onClick={props.handleClickCategory} /></Link></div>
            <div><Link to="/dashboard/fashion"><img src={headerfashion} className='headertopic' name='Fashion' onClick={props.handleClickCategory} /></Link></div>
            <div><Link to="/dashboard/diy"><img src={headerdiy} className='headertopic' name='DIY' onClick={props.handleClickCategory} /></Link></div>
            <div><Link to="/dashboard/technology"><img src={headertechnology} className='headertopic' name='Technology' onClick={props.handleClickCategory} /></Link></div>
            <div><Link to="/dashboard/science"><img src={headerscience} className='headertopic' name='Science' onClick={props.handleClickCategory} /></Link></div>
          </Slider>
        </div>
      </div>
    )
}

export default Header;







// const TopVideos = function(props) {

//     return (
//         <div className='topVideosContainer'>
//         <h1 className='title'><a name='explore'>Popular Videos</a></h1>
//                   <Row type="flex" justify="space-around">
//             <div><Icon type="caret-left" className='arrow' /></div>
//             <Col span={5}>
//               <Link to="/dashboard/sports">
//                 <img src={headersports} className='headertopic' name='Sports' onClick={props.handleClickCategory} />
//               </Link>
//             </Col>
//             <Col span={5}>
//               <Link to="/dashboard/fashion">
//                 <img src={headerfashion} className='headertopic' name='Fashion' onClick={props.handleClickCategory} />
//               </Link>
//             </Col>
//             <Col span={5}>
//               <Link to="/dashboard/diy">
//                 <img src={headerdiy} className='headertopic' name='DIY' onClick={props.handleClickCategory} />
//               </Link>
//             </Col>
//             <Col span={5}>
//               <Link to="/dashboard/technology">
//                 <img src={headertechnology} className='headertopic' name='Technology' onClick={props.handleClickCategory} />
//               </Link>
//             </Col>
//             <Col span={5}>
//               <Link to="/dashboard/science">
//                 <img src={headerscience} className='headertopic' name='Science' onClick={props.handleClickCategory} />
//               </Link>
//             </Col>
//             <div><Icon type="caret-right" className='arrow' /></div>
//           </Row>


