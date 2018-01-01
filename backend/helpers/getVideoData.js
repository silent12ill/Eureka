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