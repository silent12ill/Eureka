import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';
import Connect from '../Connect';
import './nav.css';
import logo from '../../images/logoblack.png';
import { Link } from 'react-router-dom';
import axios from "axios/index";


const Nav = function(props) {
  const menuTopics = function() {
    return (
      <div>
        <ul>
          <Link to="/dashboard/technology" name='Technology'> <li className='menuSubtopic menuSubtopicWhite'>Technology</li> </Link>
          <Link to="/dashboard/fashion" name='Fashion'><li className='menuSubtopic menuSubtopicWhite'> Fashion </li></Link>
          <Link to="/dashboard/sports" name='Sports'><li className='menuSubtopic menuSubtopicWhite'> Sports </li></Link>
          <Link to="/dashboard/doityourself" name='DIY'><li className='menuSubtopic menuSubtopicWhite'> Do It Yourself (DIY) </li></Link>
          <Link to="/dashboard/science" name='Science'><li className='menuSubtopic menuSubtopicWhite'> Science </li></Link>
        </ul>
      </div>
    )
  };

  const menuAccount = function() {

    const logoutFn = () => {
      console.log("these");
      axios.get('/api/logout',{
      }).then((response) => {
        if(response.status == 200){
          props.setLoggedInStatus(false);
          props.setCurrentUser('guest');
          localStorage.removeItem('email');
          localStorage.removeItem('token');
          props.history.push("/");
        }
      }).catch((error => {
        console.log(error)
      }))

    };
    return (
      <div>
        <ul>
          <Link to='/myaccount'><li className='menuSubtopic menuSubtopicWhite'>Settings & Bookmarks</li></Link>
          <Link to='/submitvideo'><li className='menuSubtopic menuSubtopicWhite'>Submit Video</li></Link>
          <a href='#' onClick={logoutFn}><li className='menuSubtopic menuSubtopicWhite'>Log Out</li></a>
          { props.authStatus.currentUser === 'admin@mindfeed.com' ? (<Link to='/admin'><li className='menuSubtopic adminLink'>Admin Panel</li></Link>) : null }
          { props.authStatus.currentUser === 'admin@mindfeed.com' ? (<Link to='/accountCategories'><li className='menuSubtopic adminLink'>New User Walkthrough</li></Link>) : null }
        </ul>
      </div>
    )
  };

  return (
    <div className="nav navWhite">
      <ul>
        <li><Link to='/'><img src= { logo } className="mindfeedLogo" alt="mindfeed" /></Link></li>
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
          ) : (
            <div>
              <li><Dropdown overlay={menuAccount(props)}>
                <a className="ant-dropdown-link navWhite" href="#">
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

export default Connect(Nav);