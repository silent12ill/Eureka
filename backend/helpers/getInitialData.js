const Video = require('../db').Video;

module.exports = getInitialData = (req, res) => {
    Video.find({}, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
};