import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Icon, Anchor } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import bluebulb from '../images/bluebulb.png';
import { NavLink } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

const menuTopics = (          
  <ul>
    <li className='subtopic'><NavLink to="/dashboard" activeClassName="active">Technology</NavLink></li>
    <li className='subtopic'><NavLink to="/dashboard" activeClassName="active">Hobbies</NavLink></li>
    <li className='subtopic'><NavLink to="/dashboard" activeClassName="active">Sports</NavLink></li>
    <li className='subtopic'><NavLink to="/dashboard" activeClassName="active">Fashion</NavLink></li>
    <li className='subtopic'><NavLink to="/dashboard" activeClassName="active">Life Hacks</NavLink></li>
    <li className='subtopic'><NavLink to="/dashboard" activeClassName="active">"Get Started..."</NavLink></li>
  </ul>
);

const userAccountMenu = (          
  <ul>
    <li className='subtopic'><NavLink to="/myaccount" activeClassName="active">My MindFeed</NavLink></li>
    <li className='subtopic'><NavLink to="/myaccount" activeClassName="active">My Bookmarks</NavLink></li>
    <li className='subtopic'><NavLink to="/myaccount" activeClassName="active">Contribute!</NavLink></li>
    <li className='subtopic'><NavLink to="/myaccount" activeClassName="active">Settings</NavLink></li>
    <li className='subtopic'><NavLink to="/myaccount" activeClassName="active">Log Out</NavLink></li>

  </ul>
);

const Nav = function() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Dropdown overlay={menuTopics}>
            <a className="ant-dropdown-link" href="#">
              Topics <Icon type="down" />
            </a>
          </Dropdown>
        </li>
        <li><a href='#howitworks'>How It Works</a></li>
        <li><a href='#personalize'>Personalize Feed</a></li>
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