
/*
*
*   1. Find the user
*   2. get their preferences
* */
const User = require('../db').User;

const getUserPreferences = (req, res) => {
    let email = req.body.params.email;
    console.log(email);
    User.findOne({email: email}, (err, data) => {
        if(err) {

            throw err;
        } else {
            let catAndSubCatPreference = data.categoryPreference;
            console.log(catAndSubCatPreference);
            res.status(200).send(`${catAndSubCatPreference}`);
        }
    })
}

module.exports = getUserPreferences;
