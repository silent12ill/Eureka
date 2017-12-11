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
import Main from './Main';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'home',
      loggedIn: true,
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
  this.logout = this.logout.bind(this);
  this.signup = this.signup.bind(this);
  this.login = this.login.bind(this);
  this.getPlaylistByCategory = this.getPlaylistByCategory.bind(this);
  this.handleClickCategory = this.handleClickCategory.bind(this);
  this.playClickedVideo = this.playClickedVideo.bind(this);
  this.submitVideo = this.submitVideo.bind(this);
  this.setCurrentVideo = this.setCurrentVideo.bind(this);
  this.addLastVideoInRecentVideos = this.addLastVideoInRecentVideos.bind(this);
  this.handleClickHeart = this.handleClickHeart.bind(this);
  };


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  The following functions change the view on the app
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  goToHome() {
    this.setState({currentPage: 'home'})
  }

  goToLogin() {
    this.setState({currentPage: 'login'});
  }

  goToSignup() {
    this.setState({currentPage: 'signup'})
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

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  MVP FUNCTIONS
* * * * * * * * * * * * * * * * * * * * * * * * * * */
// load initial seed data
  componentDidMount() {  
    axios.get('api/saveInitialData')
    .then((response) => {
      console.log('Initial data saved successfully', response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

// post - send authentication info
  signup(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    axios.post('/api/signup', {
      params: {
        email: email,
        password: password
      }
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log("successfully signed in");
        this.goToLogin();
      } else {
        console.log("Unable to signup");
      }
    })
  }  

  login(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    axios.post('/api/signin', {
      params: {
        email: email,
        password: password
      }
    })
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        this.setState({currentUser: email});
        this.setState({loggedIn: true});
        this.goToHome();
      } else {
        console.log("Log In Fail. Try Again.");
        this.goToLogin();
      }
    })
  }

  getPlaylistByCategory(category) {
    axios.get('/api/getPlaylistByCategory', {
      params: category
    })
    .then((response) => {
      var videos = response.data;
      console.log('Videos retrieved:', videos);
      this.setState({playlist: videos}, 
        () => {
          this.setCurrentVideo();
          this.goToDashboard();
        }
      );
    })
    .catch((error) => {
      console.log(error);
    }) 
  }

  submitVideo(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = this.state.currentUser;
    const category = data.get('category');
    const subcategory = null;
    const url = data.get('url');
    const success = function() {
      message.success('Successfully submitted! Thanks!', 10);
    }
    const error = function() {
      message.error('Submission failed. Video length must be  less than 5 minutes and from valid provider.', 10);
    }

    axios.post('/api/addVideo', {
      params: {
        email: email,
        category: category,
        subcategory: subcategory,
        url: url
      }
    })
    .then((response) => {
      if (response.data === "Valid video and saved") {
        {success()};
        console.log('Successfully submitted video!');
        this.clearForm('submitVideo');
        this.goToSubmitVideo(); 
      } else if (response.data === "Duration too long" || response.data === "Link not from valid provider") {
        {error()};
        this.clearForm('submitVideo');
        console.log("Video Submission Fail. Video Too long. Try Again.");
      }
    })

  }



/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  POST MVP FUNCTIONS
* * * * * * * * * * * * * * * * * * * * * * * * * * */

//getPlaylist()
//postUserCategories()
//postVote()
//postUserBookmark()
//getUserBookmarks()

  playClickedVideo(clickedVideo) {
    console.log("Clicked Video:", clickedVideo);
    this.setState({currentVideo: clickedVideo}, () => {
      this.checkIfBookmarked(clickedVideo.videoID);
    });
  }


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  ADDITIONAL FUNCTIONS
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  logout() {
    this.setState({loggedIn: false});
    this.setState({currentUser: 'guest'});
    this.goToHome();
  }

  //handle click of category buttons
  handleClickCategory(event) {
    this.setState({counter: 0});
    this.getPlaylistByCategory(event.target.name);
    this.setState({currentCategory: event.target.name});

  }

  setCurrentVideo() {
    const setError = function() {
      message.error('Out of Videos... Developers need to write a prefetch!', 10);
    }
    if (this.state.counter === 0) { //check needed for preloader
      this.setState({
        currentVideo: this.state.playlist[0], 
        counter: this.state.counter + 1
      }, () => {
        this.checkIfBookmarked(this.state.currentVideo.videoID);
      });
    } else if (this.state.counter !== 0 && this.state.playlist.length !== this.state.counter){
      this.addLastVideoInRecentVideos();
      this.setState({
        currentVideo: this.state.playlist[this.state.counter],
        counter: this.state.counter + 1
      }, () => {
        this.checkIfBookmarked(this.state.currentVideo.videoID);
      });
      //write preloader function
    } else {
      {setError()}
    }
  }

  addLastVideoInRecentVideos() {
    //BUG -- see waffle
    let lastVideo = this.state.currentVideo;
    console.log("Last Video:", lastVideo)
    let recentVideosList = this.state.recentVideos;
    console.log("Current RecentVidoesList:", recentVideosList);
    recentVideosList.unshift(lastVideo);
    console.log("Added and Before slicing:", recentVideosList);
    recentVideosList = recentVideosList.slice(0, 5);
    console.log("After slicing:", recentVideosList);
    this.setState({recentVideos: recentVideosList});
  }


  handleClickHeart() {
    console.log('heart Clicked');
    let currentBookmarks = this.state.bookmarkedVideos;
    let currentVideo = this.state.currentVideo;
    if (currentBookmarks.includes(currentVideo.videoID)) {
      this.deleteFromBookmarks();
    } else if (!currentBookmarks.includes(currentVideo.videoID)) {
      this.addToBookmarks();
    } else {
      console.log("Bookmarking error");
    }
  }

  addToBookmarks() {
    //make heart Red
    document.getElementById('heart').setAttribute("class", 'heartIconSelected');
    //add to bookmarks in state
    let toBeBookmarked = this.state.currentVideo.videoID;
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
    let toBeDeleted = this.state.currentVideo.videoID;
    let currentBookmarks = this.state.bookmarkedVideos;
    let keyToDelete = currentBookmarks.indexOf(toBeDeleted);
    currentBookmarks.splice(keyToDelete, 1);
    this.setState({ bookmarkedVideos: currentBookmarks });
    console.log("Bookmarks In State", this.state.bookmarkedVideos);
    //MAKE POST REQUEST WITH VIDEO ID AND USERNAME TO DELETE BOOKMARK

  }

  checkIfBookmarked(currentVideoID) {
    let theseBookmarks = this.state.bookmarkedVideos;
    console.log("CurrentBookmarks:", theseBookmarks);
    console.log("Current VideoID:", currentVideoID);
    if (theseBookmarks.includes(currentVideoID)) {
      document.getElementById('heart').setAttribute("class", 'heartIconSelected');
    } else {
      document.getElementById('heart').setAttribute("class", 'heartIcon');
    }
  }

  clearForm(formId) {
    let form = document.getElementById(formId);
    form.reset();
  }


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Renders the components based ot the current state
* * * * * * * * * * * * * * * * * * * * * * * * * * */


  render() {
    var toBeRendered = () => {
      if (this.state.currentPage === 'home') {
        return (<Home handleClickCategory={this.handleClickCategory} currentPage={this.state.currentPage} loggedIn={this.state.loggedIn} goToLogin={this.goToLogin} goToSignup={this.goToSignup} goToSubmitVideo={this.goToSubmitVideo} goToAccount={this.goToAccount} handleClickCategory={this.handleClickCategory} logout={this.logout}/>)
      }
      if (this.state.currentPage ==='login') {
        return (<Login login={this.login} currentPage={this.state.currentPage} loggedIn={this.state.loggedIn} goToLogin={this.goToLogin} goToSignup={this.goToSignup} goToSubmitVideo={this.goToSubmitVideo} goToAccount={this.goToAccount} handleClickCategory={this.handleClickCategory} logout={this.logout} />)
      }
      if (this.state.currentPage ==='signup') {
        return (<Signup signup={this.signup} currentPage={this.state.currentPage} loggedIn={this.state.loggedIn} goToLogin={this.goToLogin} goToSignup={this.goToSignup} goToSubmitVideo={this.goToSubmitVideo} goToAccount={this.goToAccount} handleClickCategory={this.handleClickCategory} logout={this.logout} />) }
      if(this.state.currentPage ==='dashboard') {
        return (<Dashboard loggedIn={this.state.loggedIn} currentCategory={this.state.currentCategory} playlist={this.state.playlist} currentVideo={this.state.currentVideo} recentVideos={this.state.recentVideos} setCurrentVideo={this.setCurrentVideo} parseUrlIntoEmbed={this.parseUrlIntoEmbed} handleClickHeart={this.handleClickHeart} playClickedVideo={this.playClickedVideo} currentPage={this.state.currentPage} loggedIn={this.state.loggedIn} goToLogin={this.goToLogin} goToSignup={this.goToSignup} goToSubmitVideo={this.goToSubmitVideo} goToAccount={this.goToAccount} handleClickCategory={this.handleClickCategory} logout={this.logout} />)
      }
      if(this.state.currentPage ==='account') {
        return (<Account />)
      }
      if(this.state.currentPage ==='submitVideo') {
        return (<SubmitVideo submitVideo={this.submitVideo} loggedIn={this.state.loggedIn} handleClickCategory={this.handleClickCategory} logout={this.logout} goToAccount={this.goToAccount} />)
      }
   	}



    return (
      <div className='App'>
        {toBeRendered()}
        <Footer />
      </div>
    )

  }
}

export default App;

        // <div className='navbg'>
        //   <Nav />
        // </div>

        // <Main />
