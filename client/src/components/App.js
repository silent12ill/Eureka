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
      userBookmarks: [],
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
  authenticate() {
  	axios.post('/authenticate', {
  		params: {
  			username: username,
  			password: password
  		}
  	})
  	.then((response) => {
  		console.log(response);
  		//on success
  		  //getPlaylist()
  		  //getBookmarks()
  	})
  }

// get - playlist for category for guest user
  getPlaylistByTopic(topic) {
  	axios.get('/getPlaylistByTopic', {
      params: {
        topic: topic,
      }
    })
    .then((response) => {
      //add retrieved playlist to state
      var videos = response.data.items;
      this.setState({playlist: videos})
    })
  }
// get - users playlist based on preferences, upvotes and downvotes
  getPlaylistByUser() {
  	axios.get('/getPlaylistByUser', {
      params: {
        username: this.state.currentUser
      }
    })
    .then((response) => {
      //add retrieved playlist to state
      var videos = response.data.items;
      this.setState({playlist: videos})
    })
  }

// post - preferences for specific user
  postUserTopics(topics) {
  	axios.post('postUserTopics', {
  		params: {
  			username: this.state.currentUser,
  			topics: topics
  		}
  	})
  	.then((response) => {
  		//if success, alert success
  		//getPlaylistByUser(); //retrieves playlist after topics/prefs sent
  	})
  }

// post - upvote and downvotes for specific video
  postVote(video, vote) {
  	axios.post('/postUserVote', {
  		params: {
  			currentUser: this.state.currentUser,
  			url: video,
  			vote: vote
  		}
  	})
  	.then((response) => {
  		//on success, alert success
  		//getPlaylistByUser() ? right away?
  	})
  }

// post - users bookmarked videos
  postUserBookmark(url) {
  	axios.post('/postUserBookmark', {
  		params: {
  			currentUser: this.state.curentUser,
  			url: url
  		}
  	})
  	.then((response) => {
      //on success, alert success
      getUserBookmarks() //update bookmark list
  	})
  }

// get - users bookmarked videos
  getUserBookmarks() {
    axios.get('/getUserBookmarks', {
    	params: {
    		currentUser: this.state.currentUser
    	}
    })
  }


// post - user submitted video
  addVideo(url) {
  	axios.post('/submittedVideo', {
  		params: {
  			source: source,
  			url: '',
  			currentUser: ''
  		}
  	})
  	.then((response) => {
  		//on success, alert success!
  	})
  
  }



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