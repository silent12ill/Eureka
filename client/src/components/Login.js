import React, { Component } from 'react';
import NavWhite from './NavWhite';
import Input from './UI/Input/Input';

const Login = function(props) {
  return (
    <div>
      <div className='navbg'>
        <NavWhite currentPage={props.currentPage} loggedIn={props.loggedIn} goToLogin={props.goToLogin} goToSignup={props.goToSignup} goToSubmitVideo={props.goToSubmitVideo} goToAccount={props.goToAccount} handleClickCategory={props.handleClickCategory} logout={props.logout} />
      </div>

      <div className='logInContainer'>
        <h1 className='title'><a name='explore'>Log In!</a></h1>
        <form onSubmit={props.login}>
          <Input inputtype="input" placeholder="email" id="email" name="email"></Input>
          <Input inputtype="input" placeholder="password" id="password" name="password"></Input>
          <button className='logInButton' type="submit">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
