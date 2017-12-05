import React from 'react';
import NavWhite from './NavWhite';




const SubmitVideo = function(props) {
  return (
    <div>
      <div className='navbg'>
        <NavWhite currentPage={props.currentPage} loggedIn={props.loggedIn} goToLogin={props.goToLogin} goToSignup={props.goToSignup} goToSubmitVideo={props.goToSubmitVideo} goToAccount={props.goToAccount} handleClickCategory={props.handleClickCategory} logout={props.logout} />
      </div>
      <div className='submitVideoContainer'>
        <h1 className='title'><a name='explore'>Submit A Video!</a></h1>
          <form onSubmit={props.submitVideo}>
            <input placeholder="url" id="url" name="url"></input>
            <select name="category">
              <option value='null' selected>Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Hobbies">Hobbies</option>
              <option value="Sports">Sports</option>
              <option value="Fashion">Fashion</option>
              <option value="Life Hacks">Life Hacks</option>
              <option value="Get Started...">Get Started...</option>
            </select>

            <button type="submit">Submit Video</button>
          </form>

      </div>
    </div>

      );
}


export default SubmitVideo;

          // <input placeholder="category" id="category" name="category"></input>
