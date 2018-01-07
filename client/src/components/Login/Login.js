import React from 'react';
import Input from '../Input/Input';
import { message } from 'antd';
import axios from 'axios';



class Login extends React.Component {
  constructor() {
      super();
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
          console.log("Response Status: ", response);

          if (response.status === 200) { //successfully logged in current user
            console.log("200")
            // this.setState({currentUser: email,
            //                   loggedIn: true});
            this.goToHome();
          } else if (response.status === 201) { //logged in new user
            console.log("201")
            // this.setState({currentUser: email, loggedIn: true});
            // this.goToWalkthrough();
          } else if (response.status === 402) { //log in failed
            console.log("402");
            // {loginError()};
            // this.goToLogin();
          } else if (response.status === 403) { //username does not exist.
            console.log("403")
            // {loginError()};
            // this.goToLogin();
          }
        })
      }

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
