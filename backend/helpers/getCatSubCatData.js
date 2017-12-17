const User = require('../db').User;
const Video = require('../db').Video;
const Promise = require('bluebird');

const getCatSubCatData = (req, res) => {
    let email = req.body.params.email;
    let preferences = req.body.params.preferences;
    console.log(email, ' ', preferences);

    User.findOne({email: email}, (err, user) => {
        if (err) {
            return err;
        } else {
            Object.keys(preferences).forEach(key => {
                user.categoryPreference.category.push(key);
                user.categoryPreference.subcategory.push(preferences[key]);
            });
            user.save((err) => {
                if (err) {
                    throw err;
                } else {
                    console.log('saved the user preferences successfully')
                }
            });
        }
    });

    function returnVideoObj(subcategory) {
        return new Promise(function (resolve, reject) {
            Video.find({subcategory: subcategory})
                .exec((err, video) => {
                    if(err) throw err;
                    resolve(video);
                })
        });
    }
    var allCatArray = [];

    for (var key in preferences) {
        for (var i = 0; i < preferences[key].length; i++) {
            allCatArray.push(preferences[key][i]);
        }
    }

    var allPromises = [];
    for(var j = 0; j < allCatArray.length; j++) {
        allPromises.push(returnVideoObj(allCatArray[j]));
    }

    Promise.all(allPromises).then(function (result) {
        res.send(result);
    });

};


module.exports = getCatSubCatData;
