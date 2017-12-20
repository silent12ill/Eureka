module.exports = voteVideo = (req, res) => {
    let email = req.body.params.email;
    let vote = req.body.params.vote;
    let videoId = req.body.params.videoId;

    if (vote > 0 ) {
      res.send(200).send({vote:1});
      //add user to videos upvoted list, remove from downvoted if in downvoted list

    } else if (vote < 0) {
      //add user to videos downvote list, remove from upvoted if in upvoted list

      res.send(200).send({vote:0});
    }

};


