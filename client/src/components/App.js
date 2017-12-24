import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Icon, message } from 'antd';
import '../css/style.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Dashboard from './Dashboard/Dashboard';
import Account from './Account/Account';
import SubmitVideo from './SubmitVideo/SubmitVideo';
import Footer from './Footer';
import Nav from './Nav/NavHome';
import NavWhite from './Nav/NavWhite';
import Main from './Main';
import Admin from './Admin/Admin';
import Walkthrough from './Signup/Walkthrough';
import { withRouter } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'home',
      loggedIn: false,
      currentUser: 'guest',
      topVideos: [],
      playlist: [],
      counter: 0,
      currentVideo: null,
      recentVideos: [],
      bookmarkedVideos: []
    };

  this.goToHome = this.goToHome.bind(this);
  this.goToLogin = this.goToLogin.bind(this);
  this.goToSignup = this.goToSignup.bind(this);
  this.goToDashboard = this.goToDashboard.bind(this);
  this.goToAccount = this.goToAccount.bind(this);
  this.goToSubmitVideo = this.goToSubmitVideo.bind(this);
  this.goToAdminPanel = this.goToAdminPanel.bind(this);
  this.goToWalkthrough = this.goToWalkthrough.bind(this);
  this.logout = this.logout.bind(this);
  this.signup = this.signup.bind(this);
  this.login = this.login.bind(this);
  this.getPlaylistByCategory = this.getPlaylistByCategory.bind(this);
  this.handleClickCategory = this.handleClickCategory.bind(this);
  this.playClickedVideo = this.playClickedVideo.bind(this);
  // this.submitVideo = this.submitVideo.bind(this);
  this.setCurrentVideo = this.setCurrentVideo.bind(this);
  this.addLastVideoInRecentVideos = this.addLastVideoInRecentVideos.bind(this);
  this.handleClickHeart = this.handleClickHeart.bind(this);
  this.handleClickAddVideo = this.handleClickAddVideo.bind(this);
  this.setMindfeedPlaylist = this.setMindfeedPlaylist.bind(this);
  this.submitMindfeedPreferences = this.submitMindfeedPreferences.bind(this);
  this.submitVideoToQueue = this.submitVideoToQueue.bind(this)
  };


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  The following functions change the view on the app
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  goToHome() {
    this.setState({currentPage: 'home'});
  }

  goToLogin() {
    this.setState({currentPage: 'login'});
  }

  goToSignup() {
    this.setState({currentPage: 'signup'});
  }

  goToDashboard() {
    this.setState({currentPage: 'dashboard'});
  }

  goToAccount() {
    this.setState({currentPage: 'account'});
  }

  goToSubmitVideo() {
    this.setState({currentPage: 'submitVideo'});
  }

  goToAdminPanel() {
    this.setState({currentPage: 'admin'});
  }

  goToWalkthrough() {
    this.setState({currentPage: 'walkthrough'})
  }



/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  MVP FUNCTIONS
* * * * * * * * * * * * * * * * * * * * * * * * * * */
// load initial seed data
  
  componentDidMount() {
    // axios.get('api/saveInitialData')
    // .then((response) => {
    //   console.log('Initial data saved successfully', response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
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

  login(event) {
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

  getPlaylistByCategory = (category) => {
    this.props.getPlaylistByCategory(category);

    // axios.get('/api/getPlaylistByCategory', {
    //   params: category
    // })
    // .then((response) => {
    //   var videos = response.data;
    //   console.log('Videos retrieved:', videos);

    //   this.props.setPlaylistVideos(videos);
    //   this.props.setCurrentVideo(videos[0]);
    //   this.goToDashboard();
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
  }

  //user sends video that gets added to admin queue
  submitVideoToQueue = (event) => {
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
    axios.post('/api/addVideoToQueue', {
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

//MOVED TO Admin/Admin.js
  // submitVideo(event) {
  //   event.preventDefault();
  //   //get data from user submitted queue table
  //   const data = new FormData(event.target);
  //   const email = this.state.currentUser;
  //   const category = data.get('category');
  //   const subcategory = null;
  //   const url = data.get('url');
  //   const success = function() {
  //     message.success('Video successfully added to database!', 10);
  //   }
  //   const error = function() {
  //     message.error('Submission failed.', 10);
  //   }

  //   axios.post('/api/addVideo', {
  //     params: {
  //       //get ALL data from when user submitted except for the category and subcategory
  //       email: email,
  //       url: url,
  //       category: category,
  //       subcategory: subcategory,
  //       dateAdded: null
  //     }
  //   })
  //   .then((response) => {
  //     if (response.data === "Valid video and saved") {
  //       {success()};
  //       this.clearForm('submitVideo');
  //       this.goToSubmitVideo();
  //     } else if (response.data === "Duration too long" || response.data === "Link not from valid provider") {
  //       {error()};
  //       this.clearForm('submitVideo');
  //       console.log("Video Submission Fail. Video Too long. Try Again.");
  //     }
  //   })

  // }



/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  POST MVP FUNCTIONS
* * * * * * * * * * * * * * * * * * * * * * * * * * */



//getPlaylist()
//postUserCategories()
//postVote()
//postUserBookmark()
//getUserBookmarks()
//getVideoInfoByID()

  playClickedVideo(clickedVideo) {
    console.log("Clicked Video:", clickedVideo);
    this.setState({currentVideo: clickedVideo}, () => {
      this.checkIfBookmarked(clickedVideo);
    });
  }



/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  ADDITIONAL FUNCTIONS
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  logout = () => {
    this.setState({loggedIn: false});
    this.setState({currentUser: 'guest'});
    this.goToHome();
  }

  //handle click of category buttons
  handleClickCategory = (event) => {
    // this.setState({counter: 0});
    this.props.updateVideoCounter(0);
    this.getPlaylistByCategory(event.target.name);
    // this.setState({currentCategory: event.target.name});

  }

  setCurrentVideo = () => {
    // Use destructuring to avoid have to do `this.props` everywhere
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

  clearForm(formId) {
    let form = document.getElementById(formId);
    form.reset();
  }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  BOOKMARKING
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  handleClickHeart() {
    console.log('heart Clicked');
    let currentBookmarks = this.state.bookmarkedVideos;
    let currentVideo = this.state.currentVideo;
    if (currentBookmarks.includes(currentVideo)) {
      this.deleteFromBookmarks();
    } else if (!currentBookmarks.includes(currentVideo)) {
      this.addToBookmarks();
    } else {
      console.log("Bookmarking error");
    }
  }

  addToBookmarks() {
    //make heart Red
    document.getElementById('heart').setAttribute("class", 'heartIconSelected');
    //add to bookmarks in state
    let toBeBookmarked = this.state.currentVideo;
    let currentBookmarks = this.state.bookmarkedVideos;
    currentBookmarks.push(toBeBookmarked);
    this.setState({bookmarkedVideos: currentBookmarks});
    console.log("Bookmarks In State", this.state.bookmarkedVideos);
    //MAKE POST REQUEST WITH VIDEO ID AND USERNAME TO ADD BOOKMARK
  }

  deleteFromBookmarks() {
    //make heart Black
    document.getElementById('heart').setAttribute("class", 'heartIcon');
    //remove from bookmarks in state
    let toBeDeleted = this.state.currentVideo.videoId;
    let currentBookmarks = this.state.bookmarkedVideos;
    let keyToDelete = currentBookmarks.indexOf(toBeDeleted);
    currentBookmarks.splice(keyToDelete, 1);
    this.setState({ bookmarkedVideos: currentBookmarks });
    console.log("Bookmarks In State", this.state.bookmarkedVideos);
    //MAKE POST REQUEST WITH VIDEO ID AND USERNAME TO DELETE BOOKMARK
  }

  checkIfBookmarked(currentvideo) {
    let theseBookmarks = this.state.bookmarkedVideos;
    if (theseBookmarks.includes(currentvideo)) {
      document.getElementById('heart').setAttribute("class", 'heartIconSelected');
    } else {
      document.getElementById('heart').setAttribute("class", 'heartIcon');
    }
  }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  VOTING
* * * * * * * * * * * * * * * * * * * * * * * * * * */
  handleClickUpvote(currentVideo) {
    //change color
    //add to db
    //disable downvote button? 

  }

  handleClickDownvote(currentVideo) {

  }

  checkifVoted(currentVideo) {


  }


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  WALKTHROUGH
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  submitMindfeedPreferences(user, pref) {
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
  USER MINDFEED CONTROLS
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  setMindfeedPlaylist(playlist) {
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
  ADMIN PANEL
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  handleClickAddVideo = (text, category, subcategory) => {
    console.log("text", text);
    console.log("category", category);
    console.log("subcategory", subcategory);
  }




/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Renders the components based ot the current state
* * * * * * * * * * * * * * * * * * * * * * * * * * */


  render() {
    // Use destructuring to avoid have to do `this.props` everywhere
    const { currentPlaylist, currentPage } = this.props;
    console.log('app props', this.props);

    var componentToBeRendered = () => {
      if (currentPage === 'home') {
        return (
          <Home 
            currentPage={currentPage} 
            handleClickCategory={this.handleClickCategory} 
            loggedIn={this.state.loggedIn} 
          />)
      }
      if (currentPage ==='login') {
        return (
          <Login 
            currentPage={currentPage} 
            login={this.login} 
            loggedIn={this.state.loggedIn} 
            goToLogin={this.goToLogin} 
            goToSignup={this.goToSignup} 
          />)
      }
      if (currentPage ==='signup') {
        return (
          <Signup 
            currentPage={currentPage} 
            signup={this.signup} 
            loggedIn={this.state.loggedIn} 
            goToLogin={this.goToLogin} 
            goToSignup={this.goToSignup} 
          />) }
      if(currentPage ==='dashboard') {
        return (
          <Dashboard 
            currentPage={currentPage} 
            loggedIn={this.state.loggedIn} 
            
            // Pulled from Redux store
            videos={currentPlaylist.videos}
            currentVideo={currentPlaylist.currentVideo} 

            recentVideos={this.state.recentVideos} 
            setCurrentVideo={this.setCurrentVideo} 
            parseUrlIntoEmbed={this.parseUrlIntoEmbed} 
            handleClickHeart={this.handleClickHeart} 
            playClickedVideo={this.playClickedVideo} 
            handleClickCategory={this.handleClickCategory} 
          />)
      }
      if(currentPage ==='account') {
        return (
          <Account 
          />)
      }
      if(currentPage ==='submitVideo') {
        return (
          <SubmitVideo 
            currentPage={currentPage}
            submitVideoToQueue={this.submitVideoToQueue} 
            loggedIn={this.state.loggedIn} 
          />)
      }
      if(currentPage ==='admin') {
        return (
          <Admin 
            handleClickAddVideo={this.handleClickAddVideo} 
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
            currentPage={currentPage} 
            loggedIn={this.state.loggedIn} 
            goToLogin={this.goToLogin} 
            goToSignup={this.goToSignup} 
            goToSubmitVideo={this.goToSubmitVideo} 
            goToAccount={this.goToAccount} 
            handleClickCategory={this.handleClickCategory} 
            logout={this.logout} 
            goToAdminPanel={this.goToAdminPanel} 
            goToWalkthrough={this.goToWalkthrough} 
          />)
      } else {
        return (
          <NavWhite 
            currentPage={currentPage} 
            loggedIn={this.state.loggedIn} 
            goToLogin={this.goToLogin} 
            goToSignup={this.goToSignup} 
            goToSubmitVideo={this.goToSubmitVideo} 
            goToAccount={this.goToAccount} 
            handleClickCategory={this.handleClickCategory} 
            logout={this.logout} 
            goToAdminPanel={this.goToAdminPanel} 
            goToWalkthrough={this.goToWalkthrough} 
          />)
      }
    }


    return (
      <div className='App'>
        <div className='navbg'>
          {navToBeRendered()} 
        </div>
          {componentToBeRendered()}
        <Footer />
      </div>
    )

  }
}

export default App;

