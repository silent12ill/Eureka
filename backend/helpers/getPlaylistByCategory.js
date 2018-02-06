const Video = require('../db').Video;

module.exports = getPlaylistByCategory = (req, res) => {
    let categoryName = req.query['0'];
    Video.find({ "category": categoryName }, (err, data) => {
        if(err) {
            console.log(err);
        } else {
        	console.log('getplaylistbydata', data)
            res.send(JSON.stringify(data));
        }
    });
}