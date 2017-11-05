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
        <Button className='btnCategory'>Technology</Button>
        <Button>Hobbies</Button>
        <Button>Life Hacks</Button>
        <Button>Sports</Button>
        <Button>Artificial Intelligence</Button>
        <button>Go</button>
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