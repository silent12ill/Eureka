const Video = require('../db').Video;


const getTopVideos = (req, res) => {
    Video.find({}, (err, data) => {
        if(err) {
            throw err;
        } else {
            res.send(data);
        }
    })
};

module.exports = getTopVideos;
