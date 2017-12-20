const Queue = require('../db').Queue;
const Video = require('../db').Video;

const approveVideo = (req, res) => {
    // receive an entire video object from client
    let videoObj = req.query;
    // search the queue with the video id and remove it
    Queue.remove({videoId: videoObj.videoId}, (err, data) => {
       if(err) {
           throw err;
       } else {
           res.status(200).send('deleted successfully');
       }
    }).then(() => {
        let toSaveVideo = new Video({videoObj});
        toSaveVideo.save((err) => {throw err});
        res.status(200).send('saved to live video queue successfully');
    })
};

module.exports = approveVideo;