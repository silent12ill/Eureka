import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Icon, Anchor, Affix, Row, Col } from 'antd';
import NavWhite from './NavWhite';
import Input from './UI/Input/Input';

const Signup = function(props) {
  return (
    <div>
      {props.currentPage !== 'home' && 
      <div className='navbg'>
        <NavWhite currentPage={props.currentPage} loggedIn={props.loggedIn} goToLogin={props.goToLogin} goToSignup={props.goToSignup} goToSubmitVideo={props.goToSubmitVideo} goToAccount={props.goToAccount} handleClickCategory={props.handleClickCategory} logout={props.logout} />
      </div>
      }
      <div className='signUpContainer'>
        <h1 className='title'>Sign Up Today!</h1>

        <form onSubmit={props.signup}>
          <Input inputType="input" placeholder="email" id="email" name="email"></Input>
          <Input inputType="input" placeholder="password" id="password" name="password"></Input>
          <button className='signUpButton' type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
