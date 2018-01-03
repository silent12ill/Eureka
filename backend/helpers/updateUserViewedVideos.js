/*
    1. Find the user.
    2. Push the video id to the user history
*/

const User = require('../db').User;

const updateUserViewedVideos = (req, res) => {
    let email = req.body.params.email;
    let videoId = req.body.params.videoId;

    User.findOne({email: email}, (err, data) => {
        if(err) {
            throw err;
        } else {
            data.history.push(videoId);
            res.status(200).send("Video added to history");
        }
    });
};

module.exports = updateUserViewedVideos;