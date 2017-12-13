import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../css/style.css';
import './admin.css';
import { Table, Icon } from 'antd';
import sampleDataAdminPanel from '../../sampleDataAdminPanel';
import QueuedVideo from './QueuedVideo';


const columns = [
  { title: 'Email', dataIndex: 'email', key: 'email' }, 
  { title: 'URL', dataIndex: 'url', key: 'url' }, 
  { title: 'Comment', dataIndex: 'comment', key: 'comment' }, 
  { title: 'Date Submitted', dataIndex: 'dateSubmitted', key: 'dateSubmitted' }, 
  { title: 'Category', key: 'category',
      render: () => (
        <select name="category">
            <option value='null' defaultValue>Category</option>
            <option value="Technology">Technology</option>
            <option value="Hobbies">Hobbies</option>
            <option value="Sports">Sports</option>
            <option value="Fashion">Fashion</option>
            <option value="Life Hacks">Life Hacks</option>
            <option value="Get Started...">Get Started...</option>
          </select>
      ),
  }, 
  { title: 'Subcategory', key: 'subcategory',
      render: (text, record) => (
        <select name="subcategory">
              <option value='null' defaultValue>Subcategory</option>
              <option value="Technology">Technology</option>
              <option value="Hobbies">Hobbies</option>
              <option value="Sports">Sports</option>
              <option value="Fashion">Fashion</option>
              <option value="Life Hacks">Life Hacks</option>
              <option value="Get Started...">Get Started...</option>
            </select>
      ),
  }, 
  { title: 'Action', key: 'action',
      render: (text, record) => (
        <span>
          <Icon className="plusCircle" type="plus-circle" />| 
          <Icon className="minusCircle" type="minus-circle" />
        </span>
      ),
  },

];


const Admin = () => (
  <div className="adminContainer">
    <h2>Queued Videos:</h2> 
    <Table dataSource={sampleDataAdminPanel} columns={columns} />
  </div>
)

export default Admin;
