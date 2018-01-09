/*
    1. Receive videoId
    2. Find the video, increment the count.
*/

const Video = require('../db').Video;

const upViewCount = (req, res) => {
    let videoId = req.body.params.videoId;

    Video.findOne({videoId: videoId}, (err, data) => {
        if(err) {
            throw err;
        } else {
            data.viewCount++;
            data.save();
            res.status(200).send(`${data.viewCount}`);

        }
    });
};

module.exports = upViewCount;
