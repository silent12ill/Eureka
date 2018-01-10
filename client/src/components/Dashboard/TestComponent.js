import React, { Component } from 'react';
import axios from 'axios';

class TestComponent extends React.Component {
  constructor(props){
    super(props);
  }

  testAPI() {
    axios.post('/api/updateUserLikesAndDislikes',{
      params: {
        likes: [],
        dislikes: ['dont','let','your'],
        email: 'a'
      }
    })

    .then((res)=>{
      console.log('RESSSSSPONSE', res);
    })

    .catch((err)=>{
      console.log(err);
    })


  }



render() {
  return(
    <div>
      <button onClick={this.testAPI}> PUSH ME TO TEST API  </button>
    </div>


    )
  }


}


export default TestComponent;
