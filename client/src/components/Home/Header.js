import React, { Component } from 'react';
import { Button } from 'antd';
import { Affix, Row, Col, Icon } from 'antd';
import bluebulb from '../../images/bluebulb.png';
import iconhacks from '../../images/iconhacks.png';
import iconhobbies from '../../images/iconhobbies.png';
import iconsports from '../../images/iconSports.png';
import icontech from '../../images/iconTech.png';
import { Link } from 'react-router-dom';



const Header = function(props) {
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
          <Row type="flex" justify="space-around">
            <div><Icon type="caret-left" className='arrow' /></div>
            <Col span={5}>
              <Link to="/dashboard/technology">
                <img src={icontech} className='headertopic' name='Technology' onClick={props.handleClickCategory} />
              </Link>
            </Col>
            <Col span={5}>
              <Link to="/dashboard/fashion">
                <img src={iconsports} className='headertopic' name='Fashion' onClick={props.handleClickCategory} />
              </Link>
            </Col>
            <Col span={5}>
              <Link to="/dashboard/hobbies">
                <img src={iconhobbies} className='headertopic' name='Hobbies' onClick={props.handleClickCategory} />
              </Link>
            </Col>
            <Col span={5}>
              <Link to="/dashboard/lifehacks">
                <img src={iconhacks} className='headertopic' name='Life Hacks' onClick={props.handleClickCategory} />
              </Link>
            </Col>
            <div><Icon type="caret-right" className='arrow' /></div>
          </Row>

        </div>
      </div>
    )
}

export default Header;


