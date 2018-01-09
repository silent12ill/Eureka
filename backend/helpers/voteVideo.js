module.exports = voteVideo = (req, res) => {
    let email = req.body.params.email;
    let vote = req.body.params.vote;
    let videoId = req.body.params.videoId;
    console.log("VOTED",vote);
    console.log("VIDEO",videoId);

    if (vote > 0 ) {
      console.log('UPVOTING VID');
      res.send(200).send({vote:1});
      //add user to videos upvoted list, remove from downvoted if in downvoted list
      //check first if video is already liked by user
      //if it is already liked by user we want to remove it
      //if it is not already liked by user we want to add it to the userPreference.likedVideoId

    } else if (vote < 0) {
      //add user to videos downvote list, remove from upvoted if in upvoted list
      console.log("DOWNVOTING VID");
      res.send(200).send({vote:0});
      //check first if video is already disliked by user
      //if it is already disliked by user we want to remove it
      //if it is not already disliked by user we want to add it to the userPreference.likedVideoId
    }

};


