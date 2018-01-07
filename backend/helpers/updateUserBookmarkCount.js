/*
    1. call the virtual type property 'bookmarksCount' attached to the userSchema
    2. Magic happens! The function is executed
*/
const User = require('../db').User;

const updateUserBookmarkCount = (req, res) => {
    let email = req.body.params.email;

    User.findOne({email: email}, (err, data) => {
       if(err) {
           throw err;
       } else {
           let length = data.bookmarksCount;
           res.status(200).send(`${length}`);
       }
    });
};

module.exports = updateUserBookmarkCount;
