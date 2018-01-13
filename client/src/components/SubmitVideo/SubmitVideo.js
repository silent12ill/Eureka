import React, {Component} from 'react';
import axios from 'axios';
import { message } from 'antd';
import Connect from '../Connect';
import Input from '../Input/Input';


const SubmitVideo = function(props) {

  const clearForm = (formId) => {
    let form = document.getElementById(formId);
    form.reset();
  }

  const addVideoToQueue = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const email = props.authStatus.currentUser;
        const comment = data.get('comment');
        const url = data.get('url');
        console.log("email", email);
        console.log("comment", comment);
        console.log('url', url);
        message.config({
            top: 80,
            duration: 4,
        });

        const success = function() {
            message.success('Successfully submitted! Thank you so much for contributing!');
        }
        const error = function() {
            message.error('Submission failed. Video length must be less than 5 minutes and from valid provider.');
        };

        axios.post('/api/addVideo', {
            params: {
                email: email,
                url: url,
                userComment: comment,
                dateSubmitted: new Date().toJSON().slice(0,10)
            }
        })
            .then((response) => {
                if (response.data === "Valid video and saved") {
                    {success()};
                    clearForm('submitVideo');
                } else if (response.data === "Duration too long" || response.data === "Link not from valid provider") {
                    {error()};
                    clearForm('submitVideo');
                    console.log("Video Submission Fail. Video Too long. Try Again.");
                }
            })
    }


  return (
    <div>
      <div className='submitVideoContainer'>
        <h1>Submit A Video!</h1>
          <form id="submitVideo" onSubmit={addVideoToQueue}>
            <input placeholder="url" id="url" name="url"></input>
            <input placeholder="anything you'd like to say about it?" id="comment" name="comment"></input>
            <button className="formButton" type="submit">Submit Video</button>
          </form>

      </div>
    </div>

      );
}



export default Connect(SubmitVideo);
