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

    // thumbnail
    // title

    let type = req.body.params.action;
    let count = req.body.params.count;
    console.log("sending: ", email, videoId, type, count);

    User.findOne({email: email}, (err, data) => {
      if(err) {
          throw err;
      } else {
          if(type === "remove") {
              const index = data.bookmarks.indexOf(videoId);
              if(index !== -1) {
                  data.bookmarks.splice(index, 1);
              }
              data.save();
          } else if(type === "add") {
            console.log("type", type)
              data.bookmarks.push(videoId);
              data.save();
          } 
          

      }
    })
    .then(() => {
      Video.findOne({videoId: videoId}, (err, data) => {
          if(err) {
              throw err;
          } else {

              if(count === "down") {
                  data.bookmarked--;
                  data.save();
                  res.status(200).send("count decremented successfully");
              } else if(count === "up") {
                  data.bookmarked++;
                  data.save();
                  res.status(200).send("count incremented successfully");
              } else {
                  res.status(400).send("Invalid action request");
              }
          }

      })
    })
};

module.exports = updateUserBookmarks;
