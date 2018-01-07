import React from 'react';
import Input from '../Input/Input';
import axios from "axios/index";
import {message} from "antd/lib/index";


class Login extends React.Component {
  constructor(props) {
      super(props);
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
        console.log("Response Status: ", response.status);

        if (response.status === 200) { //successfully logged in current user
          this.props.setLoggedInStatus(true);
          this.props.setCurrentUser(response.data.email);
          this.props.history.push("/");
        } else if (response.status === 201) { //logged in new user
          console.log(response);
          this.props.setLoggedInStatus(true);
          this.props.setCurrentUser(response.data.email);
          this.props.history.push("/walkthrough");
        } else if (response.status === 402) { //log in failed
          {loginError()};
          this.goToLogin();
        } else if (response.status === 403) { //username does not exist.
          {loginError()};
          this.goToLogin();
        }
      })
  };

  render() {
      return (
          <div className='logInContainer'>
              <h1 className='title'><a name='explore'>Log In!</a></h1>
              <form onSubmit={this.login}>
                  <input inputtype="input" placeholder="email" id="email" name="email"></input>
                  <input inputtype="input" placeholder="password" id="password" name="password"></input>
                  <button className='formButton' type="submit">Log In</button>
              </form>
          </div>
      )
  }
}

export default Login;
