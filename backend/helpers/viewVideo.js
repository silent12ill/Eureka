module.exports = viewVideo = (req, res) => {
    let videoId = req.body.params.videoId;

    console.log("Video" + videoId + " has one more view");

};