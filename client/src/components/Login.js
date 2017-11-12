import React, { Component } from 'react';



const Login = function() {
  return (
    <div className='logInContainer'>
      <h1 className='title'><a name='explore'>Log In!</a></h1>

      <form>
      <label htmlFor="username">Username:</label>
        <input id="username" type="text" name="username"/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password"/>
        <input type="submit" value="Log In"/>
    </form>


    </div>
  )
}

export default Login;
