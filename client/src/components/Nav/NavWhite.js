import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';
import './nav.css';
import bluebulb from '../../images/bluebulb.png';


const menuTopics = function(props) {
  return (
    <div>
      <ul>
        <li className='menuSubtopicWhite'><a href='#' name='Technology' onClick={props.handleClickCategory}> Technology </a></li>
        <li className='menuSubtopicWhite'><a href='#' name='Hobbies' onClick={props.handleClickCategory}> Hobbies </a></li>
        <li className='menuSubtopicWhite'><a href='#' name='Sports' onClick={props.handleClickCategory}> Sports </a></li>
        <li className='menuSubtopicWhite'><a href='#' name='Fashion' onClick={props.handleClickCategory}> Fashion </a></li>
        <li className='menuSubtopicWhite'><a href='#' name='Life Hacks' onClick={props.handleClickCategory}> Life Hacks </a></li>
        <li className='menuSubtopicWhite'><a href='#' name='Get Started...' onClick={props.handleClickCategory}> "Get Started..." </a></li>
      </ul>
    </div>
  )
};

const menuAccount = function(props) {
  return (
    <div>
      <ul>
        <li className='menuSubtopicWhite'><a href='#'>My MindFeed</a></li>
        <li className='menuSubtopicWhite'><a href='#'>My Bookmarks</a></li>
        <li className='menuSubtopicWhite'><a href='#'>Settings</a></li>
        <li className='menuSubtopicWhite'><a href='#' onClick={props.logout}>Log Out</a></li>
      </ul>
    </div>
  )
};


const Nav = function(props) {
  return (
    <div className="navWhite">
      <ul>
        <li>
          <Dropdown overlay={menuTopics(props)}>
            <a className="ant-dropdown-link navWhite" href="#"> Topics <Icon type="down" /> </a>
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
              <a onClick={props.goToLogin}>Log In</a> <span>or</span> <a onClick={props.goToSignup}>Sign Up</a>
            </div></li> 
          )}
          {props.loggedIn && (<div>
            <li><Dropdown overlay={menuAccount(props)}>
              <a className="ant-dropdown-link navWhite" href="#">
                My Account <Icon type="down" />
              </a>
            </Dropdown></li>
            <li><button className="submitVideoButton" onClick={props.goToSubmitVideo}>Submit Video</button></li>       
            </div>
          )}
        </div>
      </ul>
    </div>
  )
}

export default Nav;
