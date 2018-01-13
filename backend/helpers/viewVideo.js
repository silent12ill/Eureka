const Video = require('../db').Video;


module.exports = viewVideo = (req, res) => {
    let videoId = req.body.params.videoId;

    Video.update({videoId: videoId},{ $inc: { viewCount: 1 }}, function(err,data){

        res.send(200);
    });

};