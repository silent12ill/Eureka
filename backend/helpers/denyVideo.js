const Queue = require('../db').Queue;

const denyVideo = (req, res) => {
    let videoObj = req.query;

    Queue.remove({videoId: videoObj.videoId}, (err) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send('deleted successfully');
        }
    })
};

module.exports = denyVideo;
