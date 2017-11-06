import React, { Component } from 'react';
import { Button } from 'antd';

class GetStarted extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  //functions here


  render() {
    return (
      <div>
      <div className='getStartedContainer'>
        <div className='getStartedContainerText'>
          Feed your mind with just 5 minutes at a time.
        </div>
        <div className='getStartedContainerInner'>
        Browse our content! Customize your own Mind Feed by signing up! Get started with a category:
        <div className='goButton'>Go!</div>
        <div className='btnCategory'>Technology</div>
        <div className='btnCategory'>Hobbies</div>
        <div className='btnCategory'>Life Hacks</div>
        <div className='btnCategory'>Sports</div>
        <div className='btnCategory'>Artificial Intelligence</div>
        </div>
      </div>


      </div>

    )
  }
}

export default GetStarted;

        // <div className='getStartedContainerInner'>
        // Inner Container
        // </div>