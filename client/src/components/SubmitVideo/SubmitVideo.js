import React from 'react';
import axios from 'axios';
import { message } from 'antd';
import Input from '../Input/Input';


const SubmitVideo = function(props) {

    let state = {
        orderForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your email id'
                },
                value: ''
            },
            comment: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Add any comments'
                }
            }
        }
    };

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
    };

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
  };

  const clearForm = (formId) => {
    let form = document.getElementById(formId);
    form.reset();
  };

  let formElementsArray = [];

  for(let key in state.orderForm) {
      formElementsArray.push({
          id: key,
          config: state.orderForm[key]
      })
  }

  let inputEventHandler = (event, identifier) => {
      const updatedForm = {
          ...state.orderForm
      };
      const updatedFormElement = { ...updatedForm[identifier] }
      updatedFormElement.value = event.target.value;
      updatedForm[identifier] = updatedFormElement;
      state.orderForm = updatedForm;
  };

  return (
    <div>
      <div className='submitVideoContainer'>
        <h1>Submit A Video!</h1>
          <form id="submitVideo" onSubmit={addVideoToQueue}>
              {formElementsArray.map(formElement => {
                <Input
                    key={formElement.key}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => inputEventHandler(event, formElement.id)}
                />
              })}
            <button className="formButton" type="submit">Submit Video</button>
          </form>

      </div>
    </div>

      );
};


export default SubmitVideo;
