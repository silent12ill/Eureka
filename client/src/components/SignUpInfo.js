import React, { Component } from 'react';
import { Affix, Row, Col, Icon } from 'antd';


const SignUpInfo = function() {
  return (
    <div className='signUpContainer'>
      <h1 className='title'><a name='explore'>Sign Up Today!</a></h1>

      <form>
      <input placeholder="username"></input>
      <input placeholder="password"></input>
      <button>Go!</button>
      </form>


    </div>
  )
}

export default SignUpInfo;
