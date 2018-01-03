import React from 'react';
import axios from 'axios';
import { message } from 'antd';
import Input from '../Input/Input';


class SubmitVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            },
            formElementsArray: []
        }
    };

    addVideoToQueue = (event) => {
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
    }


    clearForm = (formId) => {
        let form = document.getElementById(formId);
        form.reset();
    }

    componentDidMount() {
        for(let key in this.state.orderForm) {
            this.state.formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        console.log('lil pump', this.state.formElementsArray)
    }




    inputEventHandler = (event, identifier) => {
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { ...updatedForm[identifier] }
        updatedFormElement.value = event.target.value;
        updatedForm[identifier] = updatedFormElement;
        this.state.orderForm = updatedForm;
    }

    render() {
        return (
            <div>
                <div className='submitVideoContainer'>
                    <h1>Submit A Video!</h1>
                    <form id="submitVideo" onSubmit={this.addVideoToQueue}>
                        {this.state.formElementsArray.map(formElement => {

                            <Input
                                inputtype={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event) => this.inputEventHandler(event, formElement.id)}
                            />
                        })}
                        <button className="formButton" type="submit">Submit Video</button>
                    </form>

                </div>
            </div>

        )
    }

}



export default SubmitVideo;
