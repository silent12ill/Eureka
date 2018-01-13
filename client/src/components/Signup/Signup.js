import Input from '../Input/Input';
import { message, Popover } from 'antd';
import axios from 'axios';
import React from 'react';
import './signup.css';
import Connect from '../Connect';

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

const passwordRequirements =   (
  <div className="">
       <p> Uppercase letter           </p>
       <p> Lowercase letter           </p>
       <p> Number                     </p>
       <p> At least 6 characters long </p>
   </div> );



const Signup = (props) => {
  console.log('SIGNUP PROPS', props);
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
         message.error("Unable to signup. Username already taken.");
       }
     })
   }
 }

const homepageTitle = () => <div className='homepageSignup'> Signup Today!</div>;
const signupPage = () => <h2 className='title'> Sign Up Today to begin your MindFeed journey! </h2>;

  return (
    <div className='signUpContainer'>
      {props.router.location.pathname === '/' ?  homepageTitle() : signupPage() }
      <div className='flex-container center'>
      <form onSubmit={signupForm}>
            <input inputtype="input" placeholder="email" id="email" name="email"></input>
            <Popover content={passwordRequirements} title="Password Requirements" trigger="hover" >
            <input inputtype="input" type="password" placeholder="password" id="password" name="password"></input>
            </Popover>

            <button className='formButton' type="submit">Sign Up</button>
          </form>
      </div>
    </div>

  )
};

export default Connect(Signup);
