import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../css/style.css';
import './admin.css';
import { Affix, Icon, AutoComplete, Row, Col } from 'antd';
// import PlayerYouTube from '../Dashboard/PlayerYouTube';
// import PlayerVimeo from '../Dashboard/PlayerVimeo';
// import PlayerDailyMotion from '../Dashboard/PlayerDailyMotion';
import axios from 'axios';
import VideoContainer from '../Dashboard/VideoContainer';
import VideoInfo from '../Dashboard/VideoInfo';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      url: null,
      category: null,
      subcategory: null,
      dateSubmitted: null,

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

  handleClickAddVideo = (videoId) => {

  }

  handleClickDenyVideo = (videoId) => {
  //delete from front
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
            <h1>ADMIN MODE  </h1>  
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
              <Icon className="plusCircle" type="plus-circle" onClick={() => this.handleClickApproveVideo(videoInfo)}/>| 
              <Icon className="minusCircle" type="minus-circle" onClick={() => this.handleClickDenyVideo(videoInfo)}/>
          </div>
          <div>
            <Row>
              <Col span={16}>
                <VideoInfo currentVideo={this.state.currentVideo} />
              </Col>
              <Col span={8}>
                <h1>ADMIN MODE <br />
                {this.state.videoQueue.length} videos in queue
                </h1>
                Submitted By: {this.state.currentVideo.submittedBy} <br />
                Date Submitted: {this.state.currentVideo.dateSubmitted} <br />
                User Comments: 
                <ul>
                  <li>Category: yup</li>
                  <li>Subcategory: uhuh</li>
                  <li>Comment: super cool video. add meeee</li>
                </ul> 

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
