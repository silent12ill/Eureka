import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';
import './nav.css';
import bluebulb from '../../images/bluebulb.png';
import { Link } from 'react-router-dom';

const menuTopics = function(props) {
  return (
    <div className='menuTopics'>
      <ul>
        <li className='menuSubtopic'><a href='#' name='Technology' onClick={props.handleClickCategory}> Technology </a></li>
        <li className='menuSubtopic'><a href='#' name='Hobbies' onClick={props.handleClickCategory}> Hobbies </a></li>
        <li className='menuSubtopic'><a href='#' name='Sports' onClick={props.handleClickCategory}> Sports </a></li>
        <li className='menuSubtopic'><a href='#' name='Fashion' onClick={props.handleClickCategory}> Fashion </a></li>
        <li className='menuSubtopic'><a href='#' name='Life Hacks' onClick={props.handleClickCategory}> Life Hacks </a></li>
        <li className='menuSubtopic'><a href='#' name='Get Started...' onClick={props.handleClickCategory}> "Get Started..." </a></li>
      </ul>
    </div>
  )
};
const menuAccount = function(props) {
  return (
    <div>
      <ul>
        <li className='menuSubtopic'><a href='#'>My MindFeed</a></li>
        <li className='menuSubtopic'><Link to='/myaccount'>My Bookmarks</Link></li>
        <li className='menuSubtopic'><Link to='/myaccount'>Settings</Link></li>
        <li className='menuSubtopic'><a href='#' onClick={props.logout}>Log Out</a></li>
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
        {props.currentPage === 'home' && (
          <div className='navLeft'>
            <li><a href='#howitworks'>How It Works</a></li>
            <li><a href='#personalize'>Personalize Feed</a></li>
          </div>
        )}
        <div className='navRight'>
          {!props.loggedIn && (
            <li><div>
              <Link to='/login'>Log In</Link> <span>or</span> <Link to='/signup'>Sign Up</Link>
            </div></li>
          )}
          {props.loggedIn && (
            <div>
              <li><Dropdown overlay={menuAccount(props)}>
                <a className="ant-dropdown-link" href="#">
                  My Account <Icon type="down" />
                </a>
              </Dropdown></li>
              <li><Link to='/submitvideo'><button className="submitVideoButton">Submit Video</button></Link></li>
              <li><Link to='/admin'><button className="formButton">Admin Panel</button></Link></li>
              <li><Link to ='/walkthrough'><button className="formButton">New User Walkthrough</button></Link></li>
            </div>
          )}
        </div>
      </ul>
    </div>
  )
}
export default Nav;