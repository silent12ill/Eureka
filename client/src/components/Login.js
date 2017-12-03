import React, { Component } from 'react';



const Login = function() {
  return (
    <div className='logInContainer'>
      <h1 className='title'><a name='explore'>Log In!</a></h1>

      <form onSubmit={props.login}>
        <input placeholder="email" id="email" name="email"></input>
        <input placeholder="password" id="email" name="password"></input>
        <input type="submit" vaue="Log In" />
      </form>


    </div>
  )
}

export default Login;
