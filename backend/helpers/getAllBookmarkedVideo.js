const User = require('../db').User;
const Video = require('../db').Video;

const getAllBookmarkedVideo = (req, res) => {
    let email = req.query.email;
    let bookmarks = [];

    function returnVideoObj(videoId) {
        return new Promise(function (resolve, reject) {
            Video.find({videoId: videoId})
                .exec((err, video) => {
                    if(err) throw err;
                    resolve(video);
                })
        });
    }

    User.findOne({email: email}, (err, data) => {
        if(err) {
            throw err;
        } else {
            for(let i = 0; i < data.bookmarks.length; i++) {
                bookmarks.push(data.bookmarks[i]);
            }
        }
    }).then(() => {
        let allPromises = [];

        for(let i = 0; i < bookmarks.length; i++) {
            allPromises.push(returnVideoObj(bookmarks[i]));
        }

        Promise.all(allPromises).then(function(results) {
            let result = [];
            for(let i = 0; i < results.length; i++) {
                result.push(results[i][0]);
            }
            res.send({videos: result});
        })
    })





}

module.exports = getAllBookmarkedVideo;
