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
            let catAndSubCatPreference = data.categoryPreference.preferences;
            let results = [];
            for(let i = 0; i < catAndSubCatPreference.length; i++) {
                let obj = {};
                obj[catAndSubCatPreference[i].category] =  catAndSubCatPreference[i].subcategory;
                results.push(obj);
            }
            console.log("catAndSubCatPreference output:", catAndSubCatPreference);
            res.status(200).send(results[0]);
        }
    })
}

module.exports = getUserPreferences;