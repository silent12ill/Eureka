import React from 'react';
import NavWhite from '../Nav/NavWhite';


const SubmitVideo = function(props) {
  return (
    <div>
      <div className='submitVideoContainer'>
        <h1>Submit A Video!</h1>
          <form id="submitVideo" onSubmit={props.submitVideo}>
            <input placeholder="url" id="url" name="url"></input>
            <input placeholder="anything you'd like to say about it?" id="comment" name="comment"></input>
            <button className="formButton" type="submit">Submit Video</button>
          </form>

      </div>
    </div>

      );
}


export default SubmitVideo;


            // <select name="category">
            //   <option value='null' defaultValue>Select Category</option>
            //   <option value="Technology">Technology</option>
            //   <option value="Hobbies">Hobbies</option>
            //   <option value="Sports">Sports</option>
            //   <option value="Fashion">Fashion</option>
            //   <option value="Life Hacks">Life Hacks</option>
            //   <option value="Get Started...">Get Started...</option>
            // </select>
