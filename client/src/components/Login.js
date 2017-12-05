import React, { Component } from 'react';



const Login = function(props) {
  return (
    <div className='logInContainer'>
      <h1 className='title'><a name='explore'>Log In!</a></h1>

      <form onSubmit={props.login}>
        <input placeholder="email" id="email" name="email"></input>


        <input placeholder="password" id="password" name="password"></input>
        <button className='logInButton' type="submit">Log In</button>
      </form>


    </div>
  )
}

export default Login;
