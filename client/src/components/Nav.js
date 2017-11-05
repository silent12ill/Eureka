import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import logo from '../images/mindfeedlogolong.png';
const SubMenu = Menu.SubMenu;

const menuCategories = (          
  <ul>
    <li><a href='#'>Link 1</a></li>
    <li><a href='#'>Link 2</a></li>
    <li><a href='#'>Link 3</a></li>
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
          <Dropdown overlay={menuCategories}>
            <a className="ant-dropdown-link" href="#">
              Browse Categories <Icon type="down" />
            </a>
          </Dropdown>
        </li>
        <li><a href='#'>How It Works</a></li>
        <li><a href='#'>Explore</a></li>
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