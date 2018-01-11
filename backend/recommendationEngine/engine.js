const _ = require('underscore');
const User = require('../db').User;
const Video = require('../db').Video;



//track likes/dislikes of user voteVideo

//find everyone who has rated the items user rated
module.exports = recommendationEngine = (req, res) => {

  let user = {
    name:'user1',
    likes: [],
    dislikes: []
  }

  let similarUser = 'user2';

  // User.findOne({email: 'bella@bella.com'}, 'videoPreference', function (err, data) {
  //   if (err) {
  //     res.status(404).send("User not found").end();
  //     throw err;
  //   } else {
      // console.log(data.videoPreference.liked, data.videoPreference.disliked);
      userLikes = ['movie1', 'movie2', 'movie3', 'movie4','movie11', 'movie22', 'movie33', 'movie44'];
      otherLikes  = ['movie1', 'movie2', 'movie3', 'movie4','movie11', 'movie22', 'movie33', 'movie44'];
      userDislikes = [];
      otherDislikes = [];
  //     console.log((_.uniq(_.flatten([var1,var2]))).join());
  //
  //   }
  // });
      //

  //Get specific information from multiple matching criteria
  // Video.find({videoId:["oKjqOK-HOX4","20142036"]}, 'likes dislikes', function(err, video) {
  //   console.log(video);
  // });
  console.log("part1:+", (_.intersection(userLikes, otherLikes).length), "  part2: +", (_.intersection(userDislikes, otherDislikes).length),
              " part3: ", (_.intersection(userLikes, otherDislikes).length), " part 4:", (_.intersection(userDislikes, otherLikes).length),
                " part5:", (_.union(userLikes, otherLikes, userDislikes, otherDislikes).length) )
  console.log("total",
    // (_.intersection(userLikes, otherLikes).length) + //8
    // (_.intersection(userDislikes, otherDislikes).length) - //8 = 16
    // (_.intersection(userLikes, otherDislikes).length) - //6 = 10
    // (_.intersection(userDislikes, otherLikes).length) // = 8
  _.union(userLikes, otherLikes, userDislikes, otherDislikes).length
  )
  console.log(8/8);


  res.status(200).send();

};

// getLikesGetDislikes

//for each user compute similarity index and store users in database

    //change from users to collections get uniques of users that have liked and disliked
    //db.getCollection('users').find({ $or: [{email: "bella9@bella.com"  }, {email: "test@gmail.com"}]},{"videoPreference.liked":1},{"videoPreference.disliked":1});

//list similar users and return videos user has not rated / (or seen?)


//save suggestions to database



  // User.update(
  // {'email': 'bella9@bella.com'},
  // {'history': {'$addToSet': 'oKjqOK-HOX421'}}
  // )
