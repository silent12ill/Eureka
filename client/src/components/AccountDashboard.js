import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Layout, Menu, Steps, Icon } from 'antd';
import Nav from './Nav';

class AccountDashboard extends React.Component {
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
      Hello Account!
		  </div>
		)
  }
}

export default AccountDashboard;

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