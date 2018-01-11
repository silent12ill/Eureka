/*  
From the front end:
    req.query = {
        email: 'something@something.com'
        preferences: {
            "category": ["Bunch", "of", "sub", "categories"]
        }
    }

Saving to the database:
    const newPreferences = [
        { category:'technology', subcategory: 'javascript'}
        { category:'technology', subcategory: 'hacking'}
        { category:'fashion', subcategory: 'hair'}
    ];
*/

const User = require('../db').User;

const updateUserPreferences = (req, res) => {
    let email = req.query.email;
    let preferences = JSON.parse(req.query.preferences);
    let newPreferences = [];

    User.findOne({email: email}, (err, data) => {
        if(err) {
            throw err;
        } else {
            for(let category in preferences) {
                const newLine = preferences[category].map((subcategory) => ({ category: category, subcategory: subcategory }))
                newPreferences = newPreferences.concat(newLine);
            }
            data.categoryPreference.preferences = newPreferences;
            data.save();
            res.status(200).send({response: "added successfully"});
        }
    })
};

module.exports = updateUserPreferences;

