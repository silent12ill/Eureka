import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Layout, Menu, Steps, Icon } from 'antd';
import TopicNav from './TopicNav';
import TopicHeader from './TopicHeader';

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
        <TopicNav />
        <TopicHeader />
        <div className='videoContainer'>
          <div className='videoContainerInner'>
          <iframe width="660" height="415" src="https://www.youtube.com/embed/mkpbbWZvYmw" frameborder="0" allowfullscreen></iframe>
		      </div>
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