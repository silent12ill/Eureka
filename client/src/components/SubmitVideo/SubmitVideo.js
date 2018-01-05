import React, {Component} from 'react';
import axios from 'axios';
import { message } from 'antd';
import Input from '../Input/Input';


class SubmitVideo extends Component {
    state = {
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

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form id="submitVideo" onSubmit={this.addVideoToQueue}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button className="formButton" type="submit">Submit Video</button>
            </form>
        );

        return(
            <div>
                <div className='submitVideoContainer'>
                    <h1>Submit A Video!</h1>
                    {form}
                </div>
            </div>
        );
    }

}



export default SubmitVideo;
