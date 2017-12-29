import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';
import './nav.css';
import bluebulb from '../../images/bluebulb.png';
import { Link } from 'react-router-dom';

const menuTopics = function(props) {
  return (
    <div>
      <ul>
        <li className='menuSubtopic menuSubtopicWhite'><Link to="/dashboard/technology" name='Technology' onClick={props.handleClickCategory}> Technology </Link></li>
        <li className='menuSubtopic menuSubtopicWhite'><Link to="/dashboard/hobbies" name='Hobbies' onClick={props.handleClickCategory}> Hobbies </Link></li>
        <li className='menuSubtopic menuSubtopicWhite'><Link to="/dashboard/sports" name='Sports' onClick={props.handleClickCategory}> Sports </Link></li>
        <li className='menuSubtopic menuSubtopicWhite'><Link to="/dashboard/fashion" name='Fashion' onClick={props.handleClickCategory}> Fashion </Link></li>
        <li className='menuSubtopic menuSubtopicWhite'><Link to="/dashboard/lifehacks" name='Life Hacks' onClick={props.handleClickCategory}> Life Hacks </Link></li>
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
          {!props.loggedIn && (
            <li><div>
              <Link to='/login'>Log In</Link> <span>or</span> <Link to='/signup'>Sign Up</Link>
            </div></li>
          )}
          {props.loggedIn && (
            <div>
              <li><Dropdown overlay={menuAccount(props)}>
                <a className="ant-dropdown-link navWhite" href="#">
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