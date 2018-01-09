
/*
*
*   1. Find the user
*   2. get their dislikes
* */
const User = require('../db').User;

const getUserDislikes = (req, res) => {
    let email = req.body.params.email;
    console.log(req.body);
    User.findOne({email: email}, (err, data) => {
        if(err) {
            throw err;
        } else {
            let dislikedVideos = data.videoPreference.disliked;
            res.status(200).send(dislikedVideos);
        }
    })
}

module.exports = getUserDislikes;
