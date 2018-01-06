import { message } from 'antd';
import axios from 'axios';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Account from './Account/Account';
import Footer from './Home/Footer';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import HomeContainer from '../containers/HomeContainer';
import DashboardContainer from '../containers/DashboardContainer';

import NavContainer from '../containers/NavContainer';
import NavWhiteContainer from '../containers/NavWhiteContainer';
import AdminContainer from '../containers/AdminContainer';
import SubmitVideoContainer from '../containers/SubmitVideoContainer';
import WalkthroughContainer from '../containers/WalkthroughContainer';
import AccountContainer from '../containers/AccountContainer';

import '../css/style.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
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
    //getTopVideos(); //will move to Home component

    // if user is logged in, get mindfeed playlist
    // Should be here in app.js because this is probably
    // the global place we will check if a user is logged in
    // this.getMindfeedPlaylist()
  }



// post - send authentication info

  login = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    message.config({
      top: 80,
      duration: 8,
    });
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


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  USEFUL FUNCTIONS TO USE THROUGHOUT
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
  }


  //send in videoId, returns video's object
  getVideoData(videoId) {
    console.log("Submitting videoId: ", videoId);
    const aVideoId = videoId;

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

  //clicked from home, recently viewed, bookmarked videos list


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  DASHBOARD -- REFACTOR TO USE REDUX
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  // REFACTOR
  playClickedVideo = (clickedVideo) => {
    console.log("Clicked Video:", clickedVideo);
    this.setState({currentVideo: clickedVideo}, () => {
      this.checkIfBookmarked(clickedVideo);
    });
  }

  goToMindfeed(){ 
    //get user's mindfeed playlist from recommendation engine based on prefernces and up/down votes already in user schema
    //set to currentPlaylist
    //goToDashboard();
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
      // if (currentPage ==='signup') {
      //   return (
      //     <Signup
      //       currentPage={currentPage}
      //       signup={this.signup}
      //       loggedIn={this.state.loggedIn}
      //     />) }
      if(currentPage ==='account') {
        return (<Account />)
      }
      // if(currentPage ==='submitVideo') {
      //   return (
      //     <SubmitVideo
      //       currentPage={currentPage}
      //       addVideoToQueue={this.addVideoToQueue}
      //       loggedIn={this.state.loggedIn}
      //     />)
      // }
      // if(currentPage ==='walkthrough') {
      //   return (
      //     <Walkthrough
      //       currentUser={this.state.currentUser}
      //       setMindfeedPlaylist={this.setMindfeedPlaylist}
      //       submitMindfeedPreferences={this.submitMindfeedPreferences}
      //     />)
      // }
    }

    /* Add conditional statement to check if the authenticated is true or false*/
    /* Split route between isAuthenticated and not authenticated */
      /* Similar to a if statement, if authenticated then display the protected routes */



    return (
      <div className="App">
        <nav className='navbg'>
          <Switch>
            <Route exact path="/" component={ NavContainer } />
            <Route path="/" component={ NavWhiteContainer } />
          </Switch>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={ HomeContainer } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
            <Route path="/myaccount" component={ AccountContainer } />
            <Route path="/walkthrough" component={ WalkthroughContainer } />
            <Route path="/admin" component={ AdminContainer } />
            <Route path="/submitvideo" component={ SubmitVideoContainer } />
            <Route path="/dashboard/:category?" component={ DashboardContainer } />
          </Switch>
        </main>
        <footer>
          <Route path="/" component={ Footer } />
        </footer>
      </div>
    )
  }
}

export default App;


