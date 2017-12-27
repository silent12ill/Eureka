const Queue = require('../db').Queue;

const getQueueVideos = (req, res) => {
    Queue.find({}, (err, data) => {
        if(err) {
            throw err;
        } else {
            res.send(data);
        }
    })
};

module.exports = getQueueVideos;