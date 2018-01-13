const User = require('../db').User;
const Video = require('../db').Video;

module.exports = voteVideo = (req, res) => {
    let email = req.body.params.email;
    let vote = req.body.params.vote;
    let videoId = req.body.params.videoId;
    // console.log("VOTED",vote);
    // console.log("VIDEO",videoId, " by:", email);
    let dislikePrev;
    let likePrev;

    User.findOne({email: email}, (err, data) => {
      if(err) {
        res.status(404).send("User not found").end();
        throw err;
      } else {
        // console.log("vote fn");
        // console.log(data);
        let likeIndex = data.videoPreference.liked.indexOf(videoId);
        let dislikeIndex = data.videoPreference.disliked.indexOf(videoId);
          if (vote > 0 ) {
          //if video is disliked remove from dislike
          if (dislikeIndex > -1 ) {
            data.videoPreference.disliked.splice(dislikeIndex, 1);
            dislikePrev = true;
          }
          if ( likeIndex > -1 ) {
            //set back to neutral state if liked previously
            data.videoPreference.liked.splice(likeIndex, 1);
            likePrev = true;
            data.save();
          } else {
            //add video to liked
            data.videoPreference.liked.push(videoId);
            console.log("liked array: ",data.videoPreference.liked);
            data.save();
          }
          } else if (vote < 0) {
              // if video is liked we remove video from like
              if ( likeIndex > -1 ) {
              data.videoPreference.liked.splice(likeIndex, 1);
              likePrev = true;
            }
            if (dislikeIndex > -1 ) {
              //set to neutral if disliked previously
              data.videoPreference.disliked.splice(dislikeIndex, 1);
              dislikePrev = true;
              data.save();
            } else {
              //add to disliked
              data.videoPreference.disliked.push(videoId);
              data.save();
            }
          }

        }

    }).then(() => {
      Video.findOne({videoId: videoId}, (err, data) => {
        if(err) {
          throw err;
        } else {
          let likeIndex = data.likedBy.indexOf(email);
          let dislikeIndex = data.dislikedBy.indexOf(email);
          console.log(dislikeIndex, likeIndex);
          //video like
          if (vote > 0 ) {
            console.log('UPVOTING VID');
            //if previous disliked
            if (dislikePrev) {

              data.dislikedBy.splice(dislikeIndex, 1);
              if(data.dislikes > 0){
                data.dislikes--;
              }
            }

            if (likePrev) {
              if(data.likes > 0){
              data.likes--;
              }
              data.likedBy.splice(likeIndex, 1);
              data.save();
              res.status(200).send('0');
            } else {
              data.likes++;
              data.likedBy.push(email);
              data.save();
              res.status(200).send('1');
            }
          }

            else if (vote < 0) {
              console.log("DOWNVOTING VID");
              if (likePrev) {
                data.likedBy.splice(likeIndex, 1);
                if(data.likes > 0){
                  data.likes--;
                }
              }
              if (dislikePrev) {
                if(data.dislikes > 0){
                  data.dislikes--;
                }
                data.dislikedBy.splice(dislikeIndex, 1);
                data.save();
                res.status(200).send('0');
              } else {
                data.dislikes++;
                data.dislikedBy.push(email);
                data.save();
                res.status(200).send('-1');
              }
            }
          }
      })
    });
};