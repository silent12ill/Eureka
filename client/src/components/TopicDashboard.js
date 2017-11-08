import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Layout, Menu, Steps, Icon } from 'antd';
import TopicNav from './TopicNav';
import TopicHeader from './TopicHeader';
import TopVideos from './TopVideos';
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class TopicDashboard extends React.Component {
	constructor() {
		super();
		this.state = {
      //state here
		};
	}

  //functions here

  render() {
		return (
		  <div>
      <div className='navbg'>
        <TopicNav />
      </div>
        <TopicHeader />

        <div className='videoContainer'>
          <div className='videoContainerInner'>
          <Icon type="caret-left" className='arrowLeft' />
            <iframe width="760" height="515" src="https://www.youtube.com/embed/mkpbbWZvYmw" frameborder="0" allowfullscreen></iframe>
          <Icon type="caret-right" className='arrowRight' />
          </div>
        </div>

        <div className='videoInfoBox'>
          <div className='videoTitleContainer'>
            <span className='videoTitle'>Recognize the Signs and Symptoms of Stroke </span><br />
            <span className='videoDesc'>Description | Date Posted | Some Other Info</span><br />
          </div>
          <div className='votingContainer'>
            <RadioGroup defaultValue="a" size="large">
              <RadioButton value="d"><Icon type="share-alt" style={{ fontSize: 20 }} /></RadioButton>
              <RadioButton value="a"><Icon type="frown" style={{ fontSize: 20 }} /></RadioButton>
              <RadioButton value="b"><Icon type="bulb" style={{ fontSize: 40 }} /></RadioButton>
              <RadioButton value="c"><Icon type="smile" style={{ fontSize: 20 }} /></RadioButton>
              <RadioButton value="d"><Icon type="heart" style={{ fontSize: 20 }} /></RadioButton>
            </RadioGroup>
          </div>
        </div>

        <div className="vidRecContainer">
          <TopVideos />
        </div>
      </div>
		)
  }
}

export default TopicDashboard;

    // <Header className="header">
    //   <div className="logo" />
    //   <Menu
    //     theme="dark"
    //     mode="horizontal"
    //     defaultSelectedKeys={['2']}
    //     style={{ lineHeight: '64px' }}
    //   >
    //     <Menu.Item key="1">nav 1</Menu.Item>
    //     <Menu.Item key="2">nav 2</Menu.Item>
    //     <Menu.Item key="3">nav 3</Menu.Item>
    //   </Menu>
    // </Header>