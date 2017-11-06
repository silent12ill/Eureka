import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Icon, Anchor } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import logo from '../images/mindfeedlogolong.png';
const SubMenu = Menu.SubMenu;

const menuTopics = (          
  <ul>
    <li><a href='#'>Subtopic 1</a></li>
    <li><a href='#'>Subtopic 2</a></li>
    <li><a href='#'>Subtopic 3</a></li>
  </ul>
);

const userAccountMenu = (          
  <ul>
    <li><a href='#'>Link 1</a></li>
    <li><a href='#'>Link 2</a></li>
    <li><a href='#'>Link 3</a></li>
  </ul>
);


const Nav = function() {
  return (
    <div className="nav">
      <img src={logo} className="logo" />
      <ul>
        <li>
          <Dropdown overlay={menuTopics}>
            <a className="ant-dropdown-link" href="#">
              Topics <Icon type="down" />
            </a>
          </Dropdown>
        </li>
        <li><a href='#howitworks'>How It Works</a></li>
        <li><a href='#explore'>Explore</a></li>
        <li className='navRight'>
          <Dropdown overlay={userAccountMenu}>
            <a className="ant-dropdown-link" href="#">
              My Account <Icon type="down" />
            </a>
          </Dropdown>
        </li>
      </ul>

    </div>
  )
}

export default Nav;

      //       <Menu
      //   theme="dark"
      //   mode="horizontal"
      //   defaultSelectedKeys={['1']}
      //   style={{ lineHeight: '64px' }}
      // >

      //   <Menu.Item key="1">Get Started</Menu.Item>
      //   <Menu.Item key="2">How It Works</Menu.Item>
      //   <Menu.Item key="3">Explore</Menu.Item>     
      // </Menu>