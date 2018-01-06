
/*
*
*   1. Find the user
*   2. get their likes
* */
const User = require('../db').User;

const getUserLikes = (req, res) => {
    let email = req.body.params.email;

    User.findOne({email: email}, (err, data) => {
        if(err) {
            throw err;
        } else {
            let likedVideos = data.videoPreference.likedVideoId;
            res.status(200).send(likedVideos);
        }
    })
}

module.exports = getUserLikes;