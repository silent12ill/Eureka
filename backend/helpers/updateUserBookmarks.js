/*
    1. User bookmarks array to push videoIds
    2. Receive email, videoId, type: "remove" or "add"

    STEPS:

    a. Find the user.
    b. Check what action:
        .. remove? -> videoId is known, find the id and delete
        .. add? -> push videoId to the bookmarks array
*/

const User = require('../db').User;
const Video = require('../db').Video;

const updateUserBookmarks = (req, res) => {
    let email = req.body.params.email;
    let videoId = req.body.params.videoId;
    let type = req.body.params.action;

    User.findOne({email: email}, (err, data) => {
      if(err) {
          throw err;
      } else {
          if(type === "remove") {
              const index = data.bookmarks.indexOf(videoId);
              if(index !== -1) {
                  data.bookmarked.splice(index, 1);
              }
              res.status(200).send("Video removed successfully");
          } else if(type === "add") {
              data.bookmarks.push(videoId);
              res.status(200).send("Video added successfully");
          } else {
              res.status(400).send("Invalid action request");
          }
      }
    });

    Video.findOne({videoId: videoId}, (err, data) => {
        if(err) {
            throw err;
        } else {
            if(type === "remove") {
                data.bookmarked--;
                res.status(200).send("count decremented successfully");
            } else if(type === "add") {
                data.bookmarked++;
                res.status(200).send("count incremented successfully");
            } else {
                res.status(400).send("Invalid action request");
            }
        }

    })
};

module.exports = updateUserBookmarks;
