import React from 'react';

class DetailedSignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      foundInDB: null
    }
  }

  checkDBforAccount(){
    //some promise
    //some db query
    //return boolean?
  }


  onSubmit(){
    checkDBforAccount();
  }


  render(){

      return (<div className='signUpContainer'>
      <h1 className='title'><a name='explore'>Sign Up Today!</a></h1>
      <form>
      <input placeholder="username"></input>
      <input placeholder="password"></input>
      <button> Go!</button>
      </form>


    </div>

  }
}

export default DetailedSignUp;


