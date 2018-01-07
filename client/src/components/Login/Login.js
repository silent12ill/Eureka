import React from 'react';
import Input from '../Input/Input';
import { message } from 'antd';
import axios from 'axios';


class Login extends React.Component {
  constructor() {
      super();
  }

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
                  <Input inputtype="input" placeholder="email" id="email" name="email"></Input>
                  <Input inputtype="input" placeholder="password" id="password" name="password"></Input>
                  <button className='formButton' type="submit">Log In</button>
              </form>
          </div>
      )
  }
}

export default Login;
