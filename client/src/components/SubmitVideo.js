import React from 'react';

class SubmitVideo extends React.Component {
  constructor(props){
    super(props);
  }


  submitVideo(e){
    e.preventDefault();
    console.log('Inside Submit Video');

    // some form thing that can get some metadata from url
    // needs to use the user info logged in
    //

    let submittedVideo = {
            title: 'title',
            url: 'someurl',
            createdBy: 'author',
            submittedBy: 'user',
            dateAdded: 'date',
            linktype: 'YouTube/DailyMotion/Video',
            category: 'category',
            subCategory: 'subcategory',
            keywords: []
        };



    //this.props.sendToDB(submittedVideo);

  }

  render(){

    return(

        <div>
          <h4> CATEGORY SELECTOR </h4>
          <h4> FORM FOR URL </h4>
          <button onClick={this.submitVideo.bind(this)}> SUBMIT VIDEO </button>
        </div>

      );
  }


}


export default SubmitVideo;

