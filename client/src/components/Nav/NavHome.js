import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';
import './nav.css';
import bluebulb from '../../images/bluebulb.png';
import { Link } from 'react-router-dom';

const menuTopics = function(props) {
  const handleClickCategory = (event) => props.getPlaylistByCategory(event.target.name)

  return (
    <div className='menuTopics'>
      <ul>
        <Link to="/dashboard/technology" name='Technology' onClick={handleClickCategory}> <li className='menuSubtopic'>Technology</li> </Link>
        <Link to="/dashboard/fashion" name='Fashion' onClick={handleClickCategory}><li className='menuSubtopic'> Fashion </li></Link>
        <Link to="/dashboard/sports" name='Sports' onClick={handleClickCategory}><li className='menuSubtopic'> Sports </li></Link>
        <Link to="/dashboard/doityourself" name='DIY' onClick={handleClickCategory}><li className='menuSubtopic'> Do It Yourself (DIY) </li></Link>
        <Link to="/dashboard/science" name='Science' onClick={handleClickCategory}><li className='menuSubtopic'> Science </li></Link>

      </ul>
    </div>
  )
};

const menuAccount = function(props) {
  return (
    <div>
      <ul>
        <Link to='/myaccount'><li className='menuSubtopic'>Bookmarks</li></Link>
        <Link to='/myaccount'><li className='menuSubtopic'>Settings</li></Link>
        <Link to='/submitvideo'><li className='menuSubtopic'>Submit Video</li></Link>
        <a href='#' onClick={props.logout}><li className='menuSubtopic'>Log Out</li></a>
        <Link to='/admin'><li className='menuSubtopic menuSubtopicWhite'>Admin Panel</li></Link>
        <Link to='/walkthrough'><li className='menuSubtopic menuSubtopicWhite'>New User Walkthrough</li></Link>
      </ul>
    </div>
  )
};

const Nav = function(props) {
  return (
    <div className="nav">
      <ul>
        <li>
          <Dropdown overlay={menuTopics(props)}>
            <a className="ant-dropdown-link" href="#"> Topics <Icon type="down" /> </a>
          </Dropdown>
        </li>

          <div className='navLeft'>
            <li><a href='#howitworks'>How It Works</a></li>
            <li><a href='#personalize'>Personalize Feed</a></li>
          </div>

        <div className='navRight'>
          {!props.authStatus.loggedIn ? (
            <li><div>
              <Link to='/login'>Log In</Link> <span>or</span> <Link to='/signup'>Sign Up</Link>
            </div></li>
          ) : (
            <div>
              <li><Dropdown overlay={menuAccount(props)}>
                <a className="ant-dropdown-link" href="#">
                  My Account <Icon type="down" />
                </a>
              </Dropdown></li>
              <li><Link to='/dashboard/mymindfeed'><button className="mindfeedNavButton">My MindFeed</button></Link></li>
            </div>
          )}
        </div>
      </ul>
    </div>
  )
}
export default Nav;