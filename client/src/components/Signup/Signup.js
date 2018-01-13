import Input from '../Input/Input';
import { message } from 'antd';
import axios from 'axios';
import React from 'react';
import './signup.css';


const validateForm = (email, password) => {
  // at least one number, one lowercase and one uppercase letter
  // at least six characters
  let passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!emailRegex.test(email)) {
    message.error(email + ' is not a valid Email Address');
    return false;
  }
  if(!passwordRegex.test(password)) {
    message.error('Not a valid password. See password requirements');
    return false;
  }
  return true;
}

const signupSuccess = () => {
  message.success('Successfully signed up! Please proceed to log in.');
}

const signupRequirements = () => {

 return ( <div className="">
     <h5> Please enter your email address </h5>
     <h5> Your password must have the following requirements: </h5>
      <div className="loginList">
     <ul>
       <li><span> Must contain an uppercase letter</span></li>
       <li><span> Must contain a lowercase letter </span></li>
       <li><span> Must contain a number </span></li>
       <li><span> Must be at least 6 characters </span></li>
     </ul>
      </div>
   </div>)
}

const Signup = function(props) {
 const signupForm = (event) => {
   event.preventDefault();
   const data = new FormData(event.target);
   const email = data.get('email');
   const password = data.get('password');

   if(validateForm(email , password)) {
     message.config({
       top: 80,
       duration: 8,
     });

     axios.post('/api/signup', {
       params: {
         email: email,
         password: password
       }
     })
     .then((response) => {
       console.log("Response:", response);
       if (response.status === 200) { { signupSuccess() };
         console.log("successfully signed up!");
         props.history.push("/login");
       } else {
         console.log("Unable to signup. Username already taken.");
       }
     })
   }
 }

  return (
    <div className='signUpContainer'>
      <h1 className='title'>Sign Up Today!</h1>
      {signupRequirements()}
      <form onSubmit={signupForm}>
        <input inputtype="input" placeholder="email" id="email" name="email"></input>
        <input inputtype="input" type="password" placeholder="password" id="password" name="password"></input>
        <button className='formButton' type="submit">Sign Up</button>
      </form>
    </div>

  )
};

export default Signup;
