import React, { Component } from 'react';
import { Button } from 'antd';
import HeaderTopics from './HeaderTopics';
import bluebulb from '../images/bluebulb.png';

 class Header extends React.Component {
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
      <img src={bluebulb} className='bulb'/>
        <div className='getStartedContainerTitle'>
          Mind Feed
        </div>
        <div className='getStartedContainerSubTitle'>
          The internet's best videos to teach you something new, all under 5 minutes!
        </div>
        <HeaderTopics />
      </div>


      </div>

    )
  }
}

export default Header;


        // <div className='getStartedContainerInner'>
        // Inner Container
        // </div>