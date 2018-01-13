const Video = require('../db').Video;

/* Have to be setup to the recommendation engine, currently returns all videos from database,
later pagination to be used to limit the number of results */

const getTopVideos = (req, res) => {
    Video.find({}, (err, data) => {
        if(err) {
            throw err;
        } else {
            res.send(data);
        }
    }).limit(10);
};

module.exports = getTopVideos;
