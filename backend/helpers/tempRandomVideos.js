const Video = require('../db').Video;

const tempRandomVideos = (req, res) => {
    Video.find().limit(15).exec((err, videos) => {
        if(err) {
            throw err;
        } else {
            res.status(200).send({videosArr: videos});
        }
    })
};

module.exports = tempRandomVideos;
