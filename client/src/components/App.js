import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../css/style.css';

import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Account from './Account';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
      currentPage: 'home',
      loggedIn: true,
      currentUser: 'guest',
      playlist: [], //playlist of videos; each video an object of -- needs thumbnails, urls, titles, descriptions, etc.

      //for guest
      currentTopic: "",

      //current Video Info
      currentVideoSource: '',
      currentVideoCode: '',
      currentVideoInfo: {} //name, desc, etc.


		};
  
  this.goToHome = this.goToHome.bind(this);
  this.goToLogin = this.goToLogin.bind(this);
  this.goToSignup = this.goToSignup.bind(this);
  this.goToDashboard = this.goToDashboard.bind(this);
  this.goToAccount = this.goToAccount.bind(this);

  this.logout = this.logout.bind(this);
	}


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

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  The following functions send requests to the server
* * * * * * * * * * * * * * * * * * * * * * * * * * */

// post - send authentication info

// get - playlist for category for guest user
// get - users playlist based on preferences, upvotes and downvotes

// post - preferences for specific user
// post - upvote and downvotes for specific video

// post - users bookmarked videos
// get - users bookmarked videos

// post - user submitted video


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Additional Functions
* * * * * * * * * * * * * * * * * * * * * * * * * * */

  logout() {
    this.setState({loggedIn: false});
  }




/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Renders the components based ot the current state
* * * * * * * * * * * * * * * * * * * * * * * * * * */


  render() {
  	var toBeRendered = () => {
      if (this.state.currentPage === 'home') {
      	return (<Home />)
      }

      if (this.state.currentPage ==='login') {
      	return (<Login />)
      }

      if (this.state.currentPage ==='signup') {
      	return (<Signup />)
      }

      if(this.state.currentPage ==='dashboard') {
      	return (<Dashboard loggedIn={this.state.loggedIn}/>)
      }

      if(this.state.currentPage ==='account') {
      	return (<Account />)
      }
   	}


		return (
			<div className='App'>
        <div className='navbg'>
          <Nav currentPage={this.state.currentPage} loggedIn={this.state.loggedIn} goToLogin={this.goToLogin} goToSignup={this.goToSignup} goToAccount = {this.goToAccount} logout = {this.logout} />
        </div>

        {toBeRendered()}

        <div className='footer'>
        Hello Footer stuff
        </div>
			</div>
		)

  }
}

export default App;