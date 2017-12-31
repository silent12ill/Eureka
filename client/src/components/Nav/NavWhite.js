import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';
import './nav.css';
import bluebulb from '../../images/bluebulb.png';
import { Link } from 'react-router-dom';

const menuTopics = function(props) {
  let handleClickCategory = (event) => {
    props.getPlaylistByCategory(event.target.name);
  }
  return (
    <div>
      <ul>
        <li className='menuSubtopic'><Link to="/dashboard/technology" name='Technology' onClick={handleClickCategory}> Technology </Link></li>
        <li className='menuSubtopic'><Link to="/dashboard/fashion" name='Fashion' onClick={handleClickCategory}> Fashion </Link></li>
        <li className='menuSubtopic'><Link to="/dashboard/sports" name='Sports' onClick={handleClickCategory}> Sports </Link></li>
        <li className='menuSubtopic'><Link to="/dashboard/doityourself" name='DIY' onClick={handleClickCategory}> Do It Yourself (DIY) </Link></li>
        <li className='menuSubtopic'><Link to="/dashboard/science" name='Science' onClick={handleClickCategory}> Science </Link></li>
      </ul>
    </div>
  )
};
const menuAccount = function(props) {
  return (
    <div>
      <ul>
        <li className='menuSubtopic menuSubtopicWhite'><a href='#'>My MindFeed</a></li>
        <li className='menuSubtopic menuSubtopicWhite'><Link to='/myaccount'>My Bookmarks</Link></li>
        <li className='menuSubtopic menuSubtopicWhite'><Link to='/myaccount'>Settings</Link></li>
        <li className='menuSubtopic menuSubtopicWhite'><a href='#' onClick={props.logout}>Log Out</a></li>
        <li className='menuSubtopic menuSubtopicWhite'><Link to='/admin'>Admin Panel</Link></li>
        <li className='menuSubtopic menuSubtopicWhite'><Link to='/walkthrough'>New User Walkthrough</Link></li>
      </ul>
    </div>
  )
};

const Nav = function(props) {
  return (
    <div className="nav navWhite">
      <ul>
        <li>
          <Dropdown overlay={menuTopics(props)}>
            <a className="ant-dropdown-link navWhite" href="#"> Topics <Icon type="down" /> </a>
          </Dropdown>
        </li>
      
        <div className='navRight'>
          {!props.authStatus.loggedIn && (
            <li><div>
              <Link to='/login'>Log In</Link> <span>or</span> <Link to='/signup'>Sign Up</Link>
            </div></li>
          )}
          {props.authStatus.loggedIn && (
            <div>
              <li><Dropdown overlay={menuAccount(props)}>
                <a className="ant-dropdown-link navWhite" href="#">
                  My Account <Icon type="down" />
                </a>
              </Dropdown></li>
              <li><Link to='/submitvideo'><button className="submitVideoButton">Submit Video</button></Link></li>
            </div>
          )}
        </div>
      </ul>
    </div>
  )
}
export default Nav;