/* { _id: 5a557b47baf2a2b1a1a866d0,
  email: 'a',
  password: '$2a$10$nGRWql73oJDzA83W2/zW2Oku/rDI/uzcryTlUr8Xsaz0rBSxt5muy',
  __v: 1,
  history: [],
  categoryPreference: { preferences: [ [Object] ] },
  videoPreference: { disliked: [], liked: [] },
  videosSubmitted: [],
  bookmarks: [] }
*/

const User = require('../db').User;

const updateUserLikesAndDislikes = (req, res) => {
    let email = req.body.params.email;
    let likesArray = req.body.params.likes;
    let dislikesArray = req.body.params.dislikes;

    console.log(JSON.stringify(req.body));

    User.findOne({email : email}, (err, data) => {
      if (err || !data) {
        throw err;
      } else {
        data.videoPreference.disliked = dislikesArray;
        data.videoPreference.liked = likesArray;
        data.save();
        res.status(200).send(data.videoPreference).end();
      }
    })
};

module.exports = updateUserLikesAndDislikes;
