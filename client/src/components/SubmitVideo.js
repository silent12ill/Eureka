import React from 'react';




const SubmitVideo = function(props) {
  return (
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

      );
}


export default SubmitVideo;

          // <input placeholder="category" id="category" name="category"></input>
