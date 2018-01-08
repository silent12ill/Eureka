import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';
import './nav.css';
import bluebulb from '../../images/bluebulb.png';
import { Link } from 'react-router-dom';
import axios from "axios/index";

const menuTopics = function(props) {
  const handleClickCategory = (event) => props.getPlaylistByCategory(event.target.name);

  return (
    <div>
      <ul>
        <Link to="/dashboard/technology" name='Technology' onClick={handleClickCategory}> <li className='menuSubtopic menuSubtopicWhite'>Technology</li> </Link>
        <Link to="/dashboard/fashion" name='Fashion' onClick={handleClickCategory}><li className='menuSubtopic menuSubtopicWhite'> Fashion </li></Link>
        <Link to="/dashboard/sports" name='Sports' onClick={handleClickCategory}><li className='menuSubtopic menuSubtopicWhite'> Sports </li></Link>
        <Link to="/dashboard/doityourself" name='DIY' onClick={handleClickCategory}><li className='menuSubtopic menuSubtopicWhite'> Do It Yourself (DIY) </li></Link>
        <Link to="/dashboard/science" name='Science' onClick={handleClickCategory}><li className='menuSubtopic menuSubtopicWhite'> Science </li></Link>


      </ul>
    </div>
  )
};

const menuAccount = function(props) {
  //const logout = () => props.logout;
  const logoutFn = () => {
    console.log("these");
    axios.get('/api/logout',{
    }).then((response) => {
      if(response.status == 200){
        props.setLoggedInStatus(false);
        props.setCurrentUser('guest');
        props.history.push("/");
      }
    }).catch((error => {
      console.log(error)
    }))

  };
  return (
    <div>
      <ul>
        <Link to='/myaccount'><li className='menuSubtopic menuSubtopicWhite'>Bookmarks</li></Link>
        <Link to='/myaccount'><li className='menuSubtopic menuSubtopicWhite'>Settings</li></Link>
        <Link to='/submitvideo'><li className='menuSubtopic menuSubtopicWhite'>Submit Video</li></Link>
        <a href='#' onClick={props.logout}><li className='menuSubtopic menuSubtopicWhite'>Log Out</li></a>
        <Link to='/admin'><li className='menuSubtopic'>Admin Panel</li></Link>
        <Link to='/walkthrough'><li className='menuSubtopic'>New User Walkthrough</li></Link>
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
          {!props.authStatus.loggedIn ? (
            <li><div>
              <Link to='/login'>Log In</Link> <span>or</span> <Link to='/signup'>Sign Up</Link>
            </div></li>
          ) : undefined}
          {props.authStatus.loggedIn ? (
            <div>
              <li><Dropdown overlay={menuAccount(props)}>
                <a className="ant-dropdown-link navWhite" href="#">
                  My Account <Icon type="down" />
                </a>
              </Dropdown></li>
              <li><Link to='/dashboard/mymindfeed'><button className="mindfeedNavButton">My MindFeed</button></Link></li>
            </div>
          ) : undefined}
        </div>
      </ul>
    </div>
  )
}
export default Nav;