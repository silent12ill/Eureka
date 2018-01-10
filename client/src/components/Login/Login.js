import React from 'react';
import Input from '../Input/Input';
import { message } from 'antd';
import axios from 'axios';
import Connect from '../Connect';



class Login extends React.Component {
  constructor() {
      super();
  }

  // parseSubcategories = (arr) => {
  //   let parsedSubcats = [];
  //   arr.map((item)=>{
  //     parsedSubcats = parsedSubcats.concat(item.split(','));
  //   });
  //   return parsedSubcats;
  // }

  // parseData = (data) => {
  //   let parsedSubcat = this.parseSubcategories(data.subcategory);
  //   console.log('PARSING DATA');
  //   console.log(parsedSubcat);
  //   let parsedObj = {
  //     category: data.category,
  //     subcategories: parsedSubcat };
  //   return parsedObj;
  // }

  getAllBookmarkedVideos = (email) => {
    axios.get('/api/getAllBookmarkedVideo', {
      params: {
        email: email
      }
    })
    .then((res) => {
      let newBookmarkedVideos = res.data.videos;
      console.log('list of bookmarks:', newBookmarkedVideos);
      this.props.setUserBookmarks(res.data.videos);
    })
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
    };
    axios.post('/api/signin', {
      params: {
        email: email,
        password: password
      }
    })
      .then((response) => {


        if (response.status === 200) { //successfully logged in current user
          console.log(JSON.stringify(response));
          let preferences = response.data.videoPreference;
          // let parsedData = this.parseData(response.data);
          // console.log(parsedData);
          this.props.setUserLikes(preferences.liked);
          this.props.setUserDislikes(preferences.disliked);
          this.props.setLoggedInStatus(true);
          this.props.setCurrentUser(email);

          this.getAllBookmarkedVideos(email);
          // add get mindfeedvideos to Redux here
          // this.props.getMindfeedPlaylist(email);

          // this.props.setUserPreferences(parsedData);

          this.props.history.push("/");
        } else if (response.status === 201) { //logged in new user
          console.log(response);
          this.props.setLoggedInStatus(true);
          this.props.setCurrentUser(email);
          this.props.history.push("/walkthrough");
        } else if (response.status === 203) { //log in failed
          {loginError()};
          // this.goToLogin(); //no longer exists
        } else if (response.status === 202) { //username does not exist.
          {loginError()};
          // this.goToLogin(); no longer exists
        }
      })
  };

  getUserBookmarks(user) {
   axios.get('./getUserBookmarks', {
       params: {
         email: user
       }
     })
     .then((response) => {
       return response.data;
     })
     .catch((error) => {
       console.log(error);
     });
 }


  render() {
      return (
          <div className='logInContainer'>
              <h1 className='title'><a name='explore'>Log In!</a></h1>
              <form onSubmit={this.login}>
                  <input inputtype="input" placeholder="email" id="email" name="email"></input>
                  <input inputtype="input" type="password" placeholder="password" id="password" name="password"></input>
                  <button className='formButton' type="submit">Log In</button>
              </form>
          </div>
      )
  }
}

export default Connect(Login);