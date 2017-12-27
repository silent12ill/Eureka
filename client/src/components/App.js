import { Icon, message } from 'antd';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Account from './Account/Account';
import Admin from './Admin/Admin';
import Footer from './Footer';
import Login from './Login/Login';
import Nav from './Nav/NavHome';
import NavWhite from './Nav/NavWhite';
import Signup from './Signup/Signup';
import Walkthrough from './Signup/Walkthrough';
import SubmitVideo from './SubmitVideo/SubmitVideo';
import HomeContainer from '../containers/HomeContainer';
import DashboardContainer from '../containers/DashboardContainer';
import '../css/style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      currentUser: 'guest',
      topVideos: [],
    };
  };

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  APP FUNCTIONS
* * * * * * * * * * * * * * * * * * * * * * * * * * */
  
  componentDidMount() { // load initial seed data
    // axios.get('api/saveInitialData')
    // .then((response) => {
    //   console.log('Initial data saved successfully', response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    //getTopVideos();
  }



// post - send authentication info
  signup = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    const signupSuccess = function() {
      message.success('Successfully signed up! Please proceed to log in.', 10);
    }
    axios.post('/api/signup', {
      params: {
        email: email,
        password: password
      }
    })
    .then((response) => {
      console.log("Response:", response);
      if (response.status === 200) {
        {signupSuccess()};
        console.log("successfully signed up");
        this.goToLogin();
      } else {
        console.log("Unable to signup. Username already taken.");
      }
    })
  }

  login = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    const loginError = function() {
      message.error('Login failed. Username and/or password invalid.', 10);
    }
    axios.post('/api/signin', {
      params: {
        email: email,
        password: password
      }
    })
    .then((response) => {
      console.log("Response Status: ", response.status);

      if (response.status === 200) { //successfully logged in current user
        this.setState({currentUser: email,
                          loggedIn: true});
        this.goToHome();
      } else if (response.status === 201) { //logged in new user
        this.setState({currentUser: email, loggedIn: true});
        this.goToWalkthrough();
      } else if (response.status === 402) { //log in failed
        {loginError()};
        this.goToLogin();
      } else if (response.status === 403) { //username does not exist.
        {loginError()};
        this.goToLogin();
      }
    })
  }


  logout = () => {
    this.setState({loggedIn: false});
    this.setState({currentUser: 'guest'});
    this.goToHome();
  }


  clearForm(formId) {
    let form = document.getElementById(formId);
    form.reset();
  }


  //send in videoId, returns video's object
  getVideoData(videoId) {
    console.log("Submitting videoId: ", videoId);
    let aVideoId = videoId;

    axios.get('/api/getVideoData', {
      params: {
        videoId: aVideoId
      }
    })
    .then((response) => {
      console.log("videoId sent");
      let fetchedVideo = response.data;
      console.log("Video Object Retrieved: ", fetchedVideo);
    })
    .catch((error) => {
      console.log(error);
    })
  }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  HOME
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  getTopVideos = () => {
    console.log("Submitting request to get top videos");
    axios.get('/api/getTopVideos')
    . then((response) => {
      console.log("videos retrieved.");
      let listOfTopVideos = response.data;
      console.log("Top Videos retrieved: ", listOfTopVideos);
    })
    .catch((error) => {
      console.log(error);
    })
  }


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  DASHBOARD
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  //clicked from home, recently viewed, bookmarked videos list
  playClickedVideo = (clickedVideo) => {
    console.log("Clicked Video:", clickedVideo);
    this.setState({currentVideo: clickedVideo}, () => {
      this.checkIfBookmarked(clickedVideo);
    });
  }


  //handle click of category buttons
  handleClickCategory = (event) => {
    this.props.updateVideoCounter(0);
    this.getPlaylistByCategory(event.target.name);
  }

  getPlaylistByCategory = (category) => {
    this.props.getPlaylistByCategory(category);
  }

  setCurrentVideo = () => {
    const { currentPlaylist } = this.props;
    let counter = this.props.currentPlaylist.counter;
    let lastVideo = this.props.currentPlaylist.currentVideo;
    let currentVideo;

    const setError = function() {
      message.error('Out of Videos... Developers need to write a prefetch!', 10);
    }

    if (this.props.currentPlaylist.videos.length !== counter) {
      // Increase the counter, update Redux
      counter++;
      currentVideo = this.props.currentPlaylist.videos[counter];
      this.props.setCurrentVideo(currentVideo);
      this.props.updateVideoCounter(counter);
      
      this.checkIfBookmarked(currentVideo.videoId);
      this.addLastVideoInRecentVideos(lastVideo);
    } else {
      {setError()}
    }
  }

  addLastVideoInRecentVideos = (lastVideo) => {
    let recentVideosList = this.state.recentVideos;
    let contains = recentVideosList.filter(video => (video.videoId === lastVideo.videoId));

    if (contains.length >= 1) {
      function videoInList(video) {
        return video.videoId === lastVideo.videoId;
      }
      let indexOfVideo = recentVideosList.findIndex(videoInList);
      recentVideosList.splice(indexOfVideo, 1);
    }
    recentVideosList.unshift(lastVideo);
    recentVideosList = recentVideosList.slice(0, 5);
    this.setState({recentVideos: recentVideosList});
  }

  //USER MINDFEED PLAYLIST
  setMindfeedPlaylist = (playlist) => {
      console.log("Videos set in App Global state:", playlist);
      this.setState({playlist: playlist},
          () => {
              this.setCurrentVideo();
              this.goToDashboard();
          })
  }

  goToMindfeed(){
    //get user's mindfeed playlist from recommendation engine based on prefernces and up/down votes already in user schema
    //set to currentPlaylist
    //goToDashboard();
  }


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  DASHBOARD MINDFEED BAR
* * * * * * * * * * * * * * * * * * * * * * * * * * */

//  VOTING
  handleClickUpvote = (currentVideo) => {
    //change color
    //add to db
    //disable downvote button? 
  }

  handleClickDownvote = (currentVideo) => {
  }

  checkifVoted = (currentVideo) => {
  }



/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  USER ACCOUNT COMPONENT
* * * * * * * * * * * * * * * * * * * * * * * * * * */
//tab for user info
//tab for current categories/subcategories in profile where editable to add/delete selections
//tab to display bookmarked videos





/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  WALKTHROUGH
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  submitMindfeedPreferences = (user, pref) => {
    console.log("Submitting the following:")
    let email = user;
    let preferences = pref;
    console.log('Email: ', user);
    console.log('Preferences: ', pref);

    axios.get('/api/getCatSubCatData', {
      params: {
        email: email,
        preferences: preferences
      }
    })
    .then((response) => {
      console.log("Preferences submitted");
      var videos = response.data;
      this.setMindfeedPlaylist(videos);
      console.log('Special videos retrieved:', videos);
    })
    .catch((error) => {
      console.log(error);
    })
  }




/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  ADMIN PANEL
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  //user sends video that gets added to admin queue
  addVideoToQueue = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = this.state.currentUser;
    const comment = data.get('comment');
    const url = data.get('url');
    const success = function() {
      message.success('Successfully submitted! Thank you so much for contributing!', 10);
    }
    const error = function() {
      message.error('Submission failed. Video length must be less than 5 minutes and from valid provider.', 10);
    }
    axios.post('/api/addVideo', {
      params: {
        email: email,
        url: url,
        comment: cumment,
        dateSubmitted: new Date().toJSON().slice(0,10)
      }
    })
    .then((response) => {
      if (response.data === "Valid video and saved") {
        {success()};
        this.clearForm('submitVideo');
        this.goToSubmitVideo();
      } else if (response.data === "Duration too long" || response.data === "Link not from valid provider") {
        {error()};
        this.clearForm('submitVideo');
        console.log("Video Submission Fail. Video Too long. Try Again.");
      }
    })
  }

  //on admin panel, when admin selects add
  handleClickAddVideo = (text, category, subcategory) => {
    console.log("text", text);
    console.log("category", category);
    console.log("subcategory", subcategory);
  }

  handleClickDeleteVideo = () => {
    console.log("delete video from queue, and not add to video list")
  }




/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Renders the components based ot the current state
* * * * * * * * * * * * * * * * * * * * * * * * * * */


  render() {
    // Use destructuring to avoid have to do `this.props` everywhere
    const { currentPlaylist, currentPage } = this.props;

    var componentToBeRendered = () => {
      if (currentPage ==='login') {
        return (
          <Login 
            currentPage={currentPage} 
            login={this.login} 
            loggedIn={this.state.loggedIn} 
          />)
      }
      if (currentPage ==='signup') {
        return (
          <Signup 
            currentPage={currentPage} 
            signup={this.signup} 
            loggedIn={this.state.loggedIn} 
          />) }
      if(currentPage ==='account') {
        return (<Account />)
      }
      if(currentPage ==='submitVideo') {
        return (
          <SubmitVideo 
            currentPage={currentPage}
            addVideoToQueue={this.addVideoToQueue} 
            loggedIn={this.state.loggedIn} 
          />)
      }
      if(currentPage ==='walkthrough') {
        return (
          <Walkthrough 
            currentUser={this.state.currentUser} 
            setMindfeedPlaylist={this.setMindfeedPlaylist} 
            submitMindfeedPreferences={this.submitMindfeedPreferences}
          />)
      }
    }


    var navToBeRendered = () => {
      if (currentPage === 'home') {
        return (
          <Nav 
            loggedIn={this.state.loggedIn} 
            handleClickCategory={this.handleClickCategory} 
            logout={this.logout} 
          />)
      } else {
        return (
          <NavWhite 
            loggedIn={this.state.loggedIn} 
            handleClickCategory={this.handleClickCategory} 
            logout={this.logout} 
          />)
      }
    }


    return (
      <div className="App">
        <div className='navbg'>
          {navToBeRendered()}
        </div>
        <main>
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
            <Route path="/myaccount" component={ Account } />
            <Route path="/walkthrough" component={ Walkthrough } />
            <Route path="/admin" component={ Admin } />
            <Route path="/submitvideo" component={ SubmitVideo } />
            <Route path="/dashboard/:category?" component={ DashboardContainer } />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;


        // <Switch>
        //   <Route exact path="/" component={ Nav } />
        //   <Route path="/" component={ NavWhite } />
        // </Switch>
