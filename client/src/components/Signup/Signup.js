import React, { Component } from 'react';
import NavWhite from '../Nav/NavWhite';
import Input from '../Input/Input';
import { message } from 'antd';
import axios from 'axios';




const Signup = function(props) {

  const signupForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    const signupSuccess = function() {
      message.success('Successfully signed up! Please proceed to log in.', 10);
    }
    axios.post('/api/signup', {
      params: {
        email: email,
        password: password
      }
    })
    .then((response) => {
      console.log("Response:", response);
      if (response.status === 200) {
        {signupSuccess()};
        console.log("successfully signed up");
        props.history.push("/login");
      } else {
        console.log("Unable to signup. Username already taken.");
      }
    })
  }

  return (
    <div className='signUpContainer'>
      <h1 className='title'>Sign Up Today!</h1>

      <form onSubmit={signupForm}>
        <Input inputtype="input" placeholder="email" id="email" name="email"></Input>
        <Input inputtype="input" placeholder="password" id="password" name="password"></Input>
        <button className='formButton' type="submit">Sign Up</button>
      </form>
    </div>

  )
};

export default Signup;
