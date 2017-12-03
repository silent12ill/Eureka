import React from 'react';

const SubmitVideo = function(props) {
  return (
    <div className='submitVideoContainer'>
      <h1 className='title'><a name='explore'>Submit A Video!</a></h1>
        <form onSubmit={props.submitVideo}>
          <input placeholder="url" id="url" name="url"></input>
          <input placeholder="category" id="category" name="category"></input>
          <button type="submit">Submit Video</button>
        </form>

    </div>

      );
}


export default SubmitVideo;

