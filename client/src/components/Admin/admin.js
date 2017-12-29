import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../css/style.css';
import './admin.css';
import { Affix, Icon, AutoComplete, Row, Col, message } from 'antd';
// import PlayerYouTube from '../Dashboard/PlayerYouTube';
// import PlayerVimeo from '../Dashboard/PlayerVimeo';
// import PlayerDailyMotion from '../Dashboard/PlayerDailyMotion';
import axios from 'axios';
import VideoContainer from '../Dashboard/VideoContainer';
import VideoInfo from '../Dashboard/VideoInfo';
import RecentVideo from '../Dashboard/RecentVideo';
import RecentVideos from '../Dashboard/RecentVideos';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      category: null,
      subcategory: null,

      videoQueue: [],
      currentVideo: {},

      allCatandSub: [],
      allCategories: [],
      allSubcategories: []
    };

  };

  componentDidMount() {
    this.getQueueVideos();
    this.getAllCategories();
    //get videos from adminQueue into videoQueue
      //write same function for refresh button
  }
  
  getQueueVideos = () => { //on mount and also for refresh button
    axios.get('/api/getQueueVideos') 
    .then((response) => {
      let videos = response.data;
      console.log("All videos from admin queue: ", videos)
      this.setState({videoQueue: videos}, () => {
        this.setCurrentVideo();
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  setCurrentVideo = () => {
    this.setState({currentVideo: this.state.videoQueue[0]});
  }


  // setCurrentVideo = () => {
  //   let currentVideo = this.state.videoQueue[0];
  //   console.log(currentVideo);

  //     if (currentVideo.linkType === "YouTube") {
  //       return (<PlayerYouTube videoId={currentVideo.videoId} />)
  //     } else if (currentVideo.linkType === "Vimeo") {
  //       return (<PlayerVimeo videoId={currentVideo.videoId} />)
  //     } else if (props.currentVideo.linkType === "DailyMotion") {
  //       return (<PlayerDailyMotion videoId={currentVideo.videoId} />)
  //     } else {
  //       console.log("Invalid video type"); 
  //     }

  // }


  handleChangeCategory = (value) => {
    this.setState({category: value});
  }

  handleChangeSubcategory = (value) => {
    this.setState({subcategory: value});
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

  handleSearch = (value) => {
      this.setState({
        dataSource: !value ? [] : [
          value
        ],
      });
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
      console.log("Video successfully submitted");
      {success()};
      this.getQueueVideos();
      this.getAllCategories();
    } else {
      console.log("Error. video not submitted.")
      {error()};
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
        console.log("Video successfully deleted");
        {denySuccess()};
        this.getQueueVideos();
        this.getAllCategories();
      } else {
        console.log("Error. video not deleted.")
        {denyError()};
      }
    })

  }
  
  playClickedVideo = () => {
    console.log("Yah. nothing.")
  }


  // handleClickAddVideo(videoInfo) {
  //   const success = function() {
  //     message.success('Video successfully added to database!', 10);
  //   }
  //   const error = function() {
  //     message.error('Submission failed.', 10);
  //   }
  //   this.setState({
  //     email: videoInfo.email,
  //     url: videoInfo.url,
  //     dateSubmitted: videoInfo.dateSubmitted
  //   }, () => {
  //     console.log(this.state); 
    
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
    //     console.log("video saved")
    //     {success()};
    //        //then remove item from admin queue in state and in db? or have a to be deleted queue upon refresh button?
    //   } else if (response.data === "Duration too long" || response.data === "Link not from valid provider") {
    //     {error()};
    //   }
    // })
    // })

  // }




  render() {
   
    return (

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
              placeholder="Category"
            />
             <AutoComplete className="catBox"
              dataSource={this.state.allSubcategories}
              onSelect={this.onSelectSub}
              onSearch={this.handleSearch}
              placeholder="Subcategory"
            />
              <button className="formButton plusCircle" onClick={() => this.handleClickAddVideo()}> Add </button>| 
              <button className="formButton minusCircle" onClick={() => this.handleClickDenyVideo()}> Deny </button> <br />
          </div>
          <div>
            <Row>
              <Col span={16}>
                <VideoInfo currentVideo={this.state.currentVideo} category={this.state.category} subcategory={this.state.subcategory}/>
              </Col>
              <Col span={8}>
                <h1>
                {this.state.videoQueue.length} Video(s) in Queue
                </h1>
                <RecentVideos recentVideos={this.state.videoQueue} playClickedVideo={this.playClickedVideo} />
              </Col>
            </Row>

          </div>


        </div>




    )
  }

}

export default Admin;
//render exactly like dashboard
//except in sticky bottom bar, add, delete, and cat/subcat dropdowns. total videos in queue.


      //   <Icon className="plusCircle" type="plus-circle" onClick={() => this.handleClickApproveVideo(videoInfo)}/>| 
      //   <Icon className="minusCircle" type="minus-circle" onClick={() => this.handleClickDenyVideo(videoInfo)}/>
        

      // <h2>Queued Videos:</h2>            
      //   <Alert message="Review only one video at a time as selecting a category/subcategory updates state separately than clicking the add video button." type="error" />
      //   <button className="refreshQueueButton" onClick={this.getQueueVideos}><Icon type="retweet" />Refresh Queue</button>
