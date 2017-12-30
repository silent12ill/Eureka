import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../css/style.css';
import './admin.css';
import { AutoComplete, Row, Col, message } from 'antd';
import axios from 'axios';
import VideoContainer from '../Dashboard/VideoContainer';
import VideoInfo from '../Dashboard/VideoInfo';
import RecentVideo from '../Dashboard/RecentVideo';
import RecentVideos from '../Dashboard/RecentVideos';
import MindfeedBar from '../Dashboard/MindfeedBar';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      category: null,
      subcategory: null,

      tempCategory: null,
      tempSubcategory: null,

      videoQueue: [],
      currentVideo: {},
      videosInQueue: null,

      allCatandSub: [],
      allCategories: [],
      allSubcategories: []
    };

  };

  componentDidMount() {
    this.getQueueVideos();
    this.getAllCategories();

  }
  
  getQueueVideos = () => {
    axios.get('/api/getQueueVideos')
    .then((response) => {
      let videos = response.data;
      console.log("Video Queue: ", videos);
      if (videos.length === 0) {
        this.setState({videosInQueue: false});
      } else {
        this.setState({videoQueue: videos, videosInQueue: true}, () => {
          this.setCurrentVideo();
        });
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  getAllCategories = () => {
    axios.get('/api/getCategories')
    .then((response) => {
      let allCatandSub = response.data;
      let categories = Object.keys(allCatandSub);
      this.setState({allCatandSub: allCatandSub, allCategories: categories});
    })
    .catch((error) => {
      console.log(error);
    })
  }

  setCurrentVideo = () => {
    this.setState({currentVideo: this.state.videoQueue[0]});
  }

  handleChangeCategory = (value) => {
    this.setState({category: value});
  }

  handleChangeSubcategory = (value) => {
    this.setState({subcategory: value});
  }


  handleSearch = (value) => {
      this.setState({
        dataSource: !value ? [] : [
          value
        ],
      });
    }

  handleChangeCat = (value) => {
    this.setState({tempCategory: value})
  }

  handleChangeSubcat = (value) => {
      this.setState({tempSubcategory: value})
  }

  onSelectCat = (value) => {
    console.log("Selected Cat: ", value)
    //sets subcategory autocomplete data source
    const allCatsandSubs = this.state.allCatandSub;
    const justSub = allCatsandSubs[value];
    this.setState({allSubcategories: justSub, category: value})
  }

  onSelectSub = (value) => {
    console.log("Selected SubCat: ", value);
    this.setState({subcategory: value});
  }

  handleClickAddVideo = () => {
    let addVideoId = this.state.currentVideo.videoId;
    let addEmail = "testemail@testemail.com";
    let addCategory = this.state.category;
    let addSubcategory = this.state.subcategory;
    if (!addCategory) {
      addCategory = this.state.tempCategory;
    }
    if(!addSubcategory) {
      addSubcategory = this.state.tempSubcategory;
    }
    console.log("Everything being sent: ")
    console.log(addVideoId, addEmail, addCategory, addSubcategory);
    message.config({
      top: 80,
      duration: 8,
    });
    const addSuccess = function() {
      message.success('Video successfully added to database!');
    }
    const addError = function() {
      message.error('Submission failed.', 10);
    }

    
    axios.get('/api/approveVideo', {
      params: {
        email: addEmail,
        videoId: addVideoId,
        category: addCategory,
        subcategory: addSubcategory
      }
    }) 
    .then((response) => {
      if(response.status === 200) {
        {addSuccess()};
        this.getQueueVideos();
        this.getAllCategories();
      } else {
        {addError()};
      }
    })

  }

  handleClickDenyVideo = () => {
    let denyVideoId = this.state.currentVideo.videoId;
    console.log("Video to be deleted: ", denyVideoId);

    message.config({
      top: 80,
      duration: 8,
    });
    const denySuccess = function() {
      message.success('Video successfully deleted from queue. Not added to DB.');
    }
    const denyError = function() {
      message.error('Deny failed.', 10);
    }

    axios.get('/api/denyVideo', {
      params: {
        videoId: denyVideoId
      }
    }) 
    .then((response) => {
      if(response.status === 200) {
        {denySuccess()};
        this.getQueueVideos();
        this.getAllCategories();
      } else {
        {denyError()};
      }
    })

  }
  
  playClickedVideo = () => {
    console.log("Yah. prob not gonna happen.")
  }


  render() {
    let videosInQueue = this.state.videosInQueue;

    return (
      <div>
        {videosInQueue && (
          <div>
            <div className="adminVideoContainer">
              <VideoContainer currentVideo={this.state.currentVideo} />
            </div>
            <div className="adminBar">

              <h1> ADMIN MODE </h1>
                <b>Current Video:</b> Submitted By: {this.state.currentVideo.submittedBy} | 
                Date Submitted: {this.state.currentVideo.dateSubmitted} | 
                User Comment: {this.state.currentVideo.userComment} <br />
                <AutoComplete className="catBox" 
                  dataSource={this.state.allCategories}
                  onSelect={this.onSelectCat}
                  onSearch={this.handleSearch} 
                  onChange={this.handleChangeCat}
                  placeholder="Category"
                />
                 <AutoComplete className="catBox" 
                  dataSource={this.state.allSubcategories}
                  onSelect={this.onSelectSub}
                  onSearch={this.handleSearch}
                  onChange={this.handleChangeSubcat}
                  placeholder="Subcategory"
                />
                <button className="formButton plusCircle" onClick={() => this.handleClickAddVideo()}> Add </button>| 
                <button className="formButton minusCircle" onClick={() => this.handleClickDenyVideo()}> Deny </button> <br />             
            </div>

              <div>
                <Row>
                  <Col span={16}>
                    <VideoInfo currentVideo={this.state.currentVideo} category={this.state.category} subcategory={this.state.subcategory} tempCategory={this.state.tempCategory} tempSubcategory={this.state.tempSubcategory}/>
                  </Col>
                  <Col span={8}>
                    <h2>{this.state.videoQueue.length} Video(s) in Queue</h2>
                    <RecentVideos recentVideos={this.state.videoQueue} playClickedVideo={this.playClickedVideo} />
                  </Col>
                </Row>
              </div>





          </div>
        )}
        {!videosInQueue && (
          <div className='noVideos'>
            <h2>No videos in queue 🎉</h2>
          </div>
        )}
      </div>
    )
  }

}

export default Admin;
