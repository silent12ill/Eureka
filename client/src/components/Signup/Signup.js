import React, { Component } from 'react';
import NavWhite from '../Nav/NavWhite';
import Input from '../Input/Input';

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
          <Input inputtype="input" placeholder="email" id="email" name="email"></Input>
          <Input inputtype="input" placeholder="password" id="password" name="password"></Input>
          <button className='signUpButton' type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
