const User = require('../db').User;
const Video = require('../db').Video;

const bookmarkVideo = (req, res) => {
    let email = req.query.email;
    let videoId = req.query.videoId;
    let bookmark = req.query.bookmark;

    User.findOne({email: email}, (err, data) => {
        if(err) {
            throw err;
        } else {
            if(bookmark === "true") {
                let index = data.bookmarks.indexOf(videoId);
                if(index !== 1) {
                    data.bookmarks.splice(index, 1);
                }
                data.save();
            } else {
                data.bookmarks.push(videoId);
                data.save();
            }
        }
    }).then(() => {
        Video.findOne({videoId: videoId}, (err, data) => {
            if(err) {
                throw err;
            } else {
                if(bookmark === "true") {
                    data.bookmarked--;
                    data.save();
                    res.status(200).send({response: "removed disliked successfully"});
                } else {
                    data.bookmarked++;
                    data.save();
                    res.status(200).send({response: "disliked video successfully"});
                }
            }
        })
    })

}

module.exports = bookmarkVideo;