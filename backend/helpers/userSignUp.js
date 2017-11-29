const User = require("../db").User;

module.exports = userSignUp = (req, res) => {
    /* Check the request body and assign it to an object */
    if(req.body.email && req.body.password) {
        let userData = {
            email: req.body.email,
            password: req.body.password
        };

        /* Use the above object to save it to the database */
        User.create(userData, (err) => {
            if(err) {
                console.error(err);
            };
            console.log('Saved Successfully');
        });
    }
};

