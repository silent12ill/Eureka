import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../css/style.css';
import './admin.css';
import { Table, Icon, Select, Alert } from 'antd';
const Option = Select.Option;
import sampleDataAdminPanel from '../../sampleDataAdminPanel';


class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      url: null,
      category: null,
      subcategory: null,
      dateSubmitted: null,

      videoQueue: []
    };
    this.tableState = {
      pagination: false,
    };

  this.handleChangeCategory = this.handleChangeCategory.bind(this);
  this.handleChangeSubcategory = this.handleChangeSubcategory.bind(this);

  };

  componentDidMount() {
    //get videos from adminQueue into videoQueue
      //write same function for refresh button
  }

  handleChangeCategory(value) {
    this.setState({category: value});
  }

  handleChangeSubcategory(value) {
    this.setState({subcategory: value});
  }


  handleClickAddVideo(videoInfo) {
    const success = function() {
      message.success('Video successfully added to database!', 10);
    }
    const error = function() {
      message.error('Submission failed.', 10);
    }
    this.setState({
      email: videoInfo.email,
      url: videoInfo.url,
      dateSubmitted: videoInfo.dateSubmitted
    }, () => {
      console.log(this.state); 
    })
    // axios.post('/api/addVideo', {
    //   params: {
        
    //     email: this.state.email,
    //     url: this.state.url,
    //     category: this.state.caregory,
    //     subcategory: this.state.subcategory,
    //     dateSubmitted: this.state.dateSubmitted 
    //   }
    // })
    // .then((response) => {
    //   if (response.data === "Valid video and saved") {
    //     {success()};
           //then remove item from admin queue in state and in db? or have a to be deleted queue upon refresh button?
           //write refresh button to request more videos in the queue
    //   } else if (response.data === "Duration too long" || response.data === "Link not from valid provider") {
    //     {error()};
    //   }
    // })

  }


  render() {
    const columns = [
      { title: 'Date Submitted', dataIndex: 'dateSubmitted', key: 'dateSubmitted' }, 
      { title: 'Email', dataIndex: 'email', key: 'email' }, 
      { title: 'URL', dataIndex: 'url', key: 'url' }, 
      { title: 'Comment', dataIndex: 'comment', key: 'comment' }, 
      { title: 'Category', key: 'category',
          render: (text, record) => (
            <Select defaultValue="Category" style={{ width: 120 }} onChange={this.handleChangeCategory}>
              <Option value='null'>Category</Option>
              <Option value="Technology">Technology</Option>
              <Option value="Hobbies">Hobbies</Option>
              <Option value="Sports">Sports</Option>
              <Option value="Fashion">Fashion</Option>
              <Option value="Life Hacks">Life Hacks</Option>
              <Option value="Get Started...">Get Started...</Option>
          </Select>


          ),
      }, 
      { title: 'Subcategory', key: 'subcategory',
          render: (text, record) => (
            <Select defaultValue="Category" style={{ width: 120 }} onChange={this.handleChangeSubcategory}>
                <Option value='null'>Category</Option>
                <Option value="Technology">Technology</Option>
                <Option value="Hobbies">Hobbies</Option>
                <Option value="Sports">Sports</Option>
                <Option value="Fashion">Fashion</Option>
                <Option value="Life Hacks">Life Hacks</Option>
                <Option value="Get Started...">Get Started...</Option>
            </Select>
          ),
      }, 
      { title: 'Action', key: 'action',
          render: (videoInfo) => (
            <span>
            
              <Icon className="plusCircle" type="plus-circle" onClick={() => this.handleClickAddVideo(videoInfo)}/>| 
              <Icon className="minusCircle" type="minus-circle" />
            </span>
          ),
      },

    ];


    return (
      <div className="adminContainer">
        <h2>Queued Videos:</h2>            
        <Alert message="Review only one video at a time as selecting a category/subcategory updates state separately than clicking the add video button." type="error" />
        <Table {...this.tableState} dataSource={sampleDataAdminPanel} columns={columns} />
        <button className="refreshQueueButton"><Icon type="retweet" />Refresh Queue</button>
      </div>
    )
  }

}

export default Admin;

