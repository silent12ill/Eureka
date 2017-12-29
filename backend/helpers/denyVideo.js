const Queue = require('../db').Queue;

const denyVideo = (req, res) => {
    let videoObj = req.query.videoId;

    Queue.remove({videoId: req.query.videoId}, (err) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send('deleted successfully');
        }
    })
};

module.exports = denyVideo;
