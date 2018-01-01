import React from 'react';
import NavWhite from '../Nav/NavWhite';
import axios from 'axios';
import { message } from 'antd';


const SubmitVideo = function(props) {



  const addVideoToQueue = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = props.authStatus.currentUser;
    const comment = data.get('comment');
    const url = data.get('url');
    message.config({
      top: 80,
      duration: 8,
    });
    const success = function() {
      message.success('Successfully submitted! Thank you so much for contributing!');
    }
    const error = function() {
      message.error('Submission failed. Video length must be less than 5 minutes and from valid provider.');
    }
    axios.post('/api/addVideo', {
      params: {
        email: email,
        url: url,
        comment: comment,
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

  const clearForm = (formId) => {
    let form = document.getElementById(formId);
    form.reset();
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


export default SubmitVideo;
