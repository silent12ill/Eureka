import React from 'react';
import {Form, Text } from 'react-form';


class DashboardAddVideo extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }


  onSubmit(){
    checkDBforAccount();
  }


     render() {
      return (
        <div>
          <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <label htmlFor="url">Video URL</label>
                <Text field="url" id="url" />
                <label htmlFor="category">Category</label>
                <Text field="category" id="category" />
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
              </form>
            )}
          </Form>
        </div>
      );
    }
}

export default DashboardAddVideo;


