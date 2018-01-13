/*
    1. Find the user.
    2. Push the video id to the user history
*/

const User = require('../db').User;

const updateUserViewedVideos = (req, res) => {
    let email = req.body.params.email;
    let videoId = req.body.params.videoId;
    (console.log('info updateUserViewedVideos is receiving:', email, videoId))
    // res.status(200).send("dun");

  User.update({email:email}, {"$addToSet" : {"history": videoId}});


    // User.findOne({email: email}, (err, data) => {
    //     if(err) {
    //         throw err;
    //     } else {
    //         if(data.history.includes(videoId)) {
    //             res.status(201).send("Video already in history");
    //         } else {
    //             data.history.push(videoId);
    //             data.save();
    //             res.status(200).send("Video added to history");
    //
    //         }
    //     }
    // });
};

module.exports = updateUserViewedVideos;
