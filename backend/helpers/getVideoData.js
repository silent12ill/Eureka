//currently unused

const Video = require('../db').Video;

const getVideoData = (req, res) => {
    let videoId = req.query.videoId;


    Video.findOne({videoId: videoId}, (err, videoObj) => {
        if(err) {
            throw err;
        } else {
            res.send(videoObj);
        }
    })
};

module.exports = getVideoData;




//complimentary front-end function
  // //send in videoId, returns video's object
  // getVideoData(videoId) {
  //   console.log("Submitting videoId: ", videoId);
  //   const aVideoId = videoId;

  //   axios.get('/api/getVideoData', {
  //     params: {
  //       videoId: aVideoId
  //     }
  //   })
  //   .then((response) => {
  //     console.log("videoId sent");
  //     let fetchedVideo = response.data;
  //     console.log("Video Object Retrieved: ", fetchedVideo);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }