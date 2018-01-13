const _ = require('underscore');
const User = require('../db').User;
const Video = require('../db').Video;



//track likes/dislikes of user voteVideo

//find everyone who has rated the items user rated
module.exports = recommendationEngine = (req, res) => {

  // let email = req.body.params.email;
  let email = 'bella9@bell.com';
  //get users similar users

  User.find({"email":['bella@gmail.com' , 'test@gmail', 'shak1@shak.com', 'test@gmail.com',
      'bella@gmail.com', 'bella9@bell.com', 'bella1@bell.com','shak@shak.com', 'shak1@shak.com']}, 'email videoPreference' , function(err, others){
    console.log(others);

  userLikes = ['video2', 'video4', 'video11', 'video22', 'video33', 'video44'];
  userDislikes = ['video1'];




  });


  res.status(200).send();
}
    //fn requires user object to be passed with .email and .videoPreference
function getSimilarUsers(user){
    //get the users who liked/disliked the videos User already has liked/disliked
  Video.find({videoId: (_.flatten([user.videoPreference.likedBy, user.videoPreference.dislikedBy]))}, 'likedBy dislikedBy', function(err, video) {
    console.log(video);

    let uniqueSet = []; //create a unique set of users to check against our User remove User email from set
    for(var i = 0; i < video.length; i++) {
      uniqueSet.push(video[i].dislikedBy);
      uniqueSet.push(video[i].likedBy);
    }
    uniqueSet =_.uniq(_.flatten(uniqueSet));
    if(uniqueSet.indexOf(user.email)){
      uniqueSet.splice(uniqueSet.indexOf(user.email), 1); // remove user from unique set, we dont need to check against themself
    }
    // console.log(uniqueSet);
    let userLikes = user.videoPreference.liked;
    let userDislikes = user.videoPreference.disliked;
    let topMatches = [];
    //get videos
    User.find({"email":uniqueSet}, function(err,others){
      console.log(others);

      let similarityArr = [];

      let searchSimilarity = others.length;

      // Limit check against users just in case
      // if(searchSimilarity > 10 ){
      //   searchSimilarity = 10;
      // }

      for (var i = 0; i < searchSimilarity; i++){
        otherLikes = others[i].videoPreference.liked;
        otherDislikes = others[i].videoPreference.disliked;

        var step1 = (_.intersection(userLikes, otherLikes).length);
        var step2 = (_.intersection(userDislikes, otherDislikes).length);
        var step3 = (_.intersection(userLikes, otherDislikes).length);
        var step4 = (_.intersection(userDislikes, otherLikes).length);
        var step5 = (step1 + step2 + step3 + step4);
        var step6 = (_.union(userLikes, userDislikes, otherLikes, otherDislikes).length);
        console.log(step5, step6);
        let similarityScore = (step5 / step6);
        console.log(others[i].email, similarityScore);
        similarityArr.push([others[i].email, similarityScore]);
        if(i == searchSimilarity - 1 ){
          similarityArr.sort(function(a,b){
            return b[1] - a[1];
          });
          let topMatches = [];

          for(var j = 0; j < similarityArr.length; j++) {
            topMatches.push(similarityArr[j][0]);
          }
          //verify here
          user.similarUsers = topMatches;
          user.save();
          //saved topMatches to user object
        }
      }
    })
  });
};



