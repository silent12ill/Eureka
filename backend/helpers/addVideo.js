const addToDB = require('./addToDB');
//Check videoUrl for hosting provider
module.exports = addVideo = (req, res) => {
  console.log(req.body.params);
  // flag for security uses
  let flag = 0;
  if(flag == 0 && req.body.addVideo.indexOf('youtube.com') >= 0){
    let uniqueId = req.body.addVideo;
    uniqueId = uniqueId.split('youtube.com/watch?v=')[1];
    console.log("Video from youtube", uniqueId);
    flag = 1;
  }
    if(flag == 0 && req.body.addVideo.indexOf('dailymotion.com') >= 0){
      let uniqueId = req.body.addVideo;
      uniqueId = uniqueId.split('dailymotion.com/video/')[1];
    console.log("Video from dailymotion", uniqueId);
    flag = 1;
  }
    if(flag == 0 && req.body.addVideo.indexOf('vimeo.com') >= 0){
      let uniqueId = req.body.addVideo;
      uniqueId = uniqueId.split('vimeo.com/')[1];
      console.log("Video from vimeo", uniqueId);
    flag = 1;
  }


  if (flag) {
    //addToDB(req.body);
  }

};


