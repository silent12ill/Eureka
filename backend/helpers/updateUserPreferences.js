/*
    req.query = {
        email: 'something@something.com'
        preferences: {
            "category": ["Bunch", "of", "sub", "categories"]
        }
    }

 */

const User = require('../db').User;

const updateUserPreferences = (req, res) => {
    let email = req.query.email;
    let preferences = JSON.parse(req.query.preferences);

    User.findOne({email: email}, (err, data) => {
        if(err) {
            throw err;
        } else {
            if(data.categoryPreference.preferences.length === 0) {
                for(let obj in preferences) {
                    data.categoryPreference.preferences.push({category: obj, subcategory: preferences[obj]});
                }
                    data.save();
                    res.status(200).send({response: "added successfully"});
            } else {
                    for(let obj in preferences) {
                        // check if same category exist
                        for(let i = 0; i < data.categoryPreference.preferences.length; i++) {
                            if(data.categoryPreference.preferences[i].category === obj) {
                                // found the existing category, now check for subcategory
                                let subcategory = data.categoryPreference.preferences[i].subcategory; // array of subcategory wrt category
                                let usersubCat = preferences[obj];

                                for(let j = 0; j < usersubCat.length; j++) {
                                    if(subcategory.indexOf(usersubCat[j]) === -1) {
                                        // so now the subcat of user submitted doesn't exist in database subcat
                                        subcategory.push(usersubCat[j]);
                                    }
                                }
                            }
                        }
                    }
            }
        }
    })
};

module.exports = updateUserPreferences;

/*

 1. FUNCTION DOESN'T WORK WHEN THE LENGTH > 0, AND THE CATEGORY IS NEW
 2. IT SAVES NEW SUB-CATEGORIES FOR EXISTING CATEGORIES
*/
