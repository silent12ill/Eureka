const User = require("../db").User;

module.exports = userSignUp = (req, res) => {
    console.log(req.body.params);
    let email = req.body.params.email;
    let password = req.body.params.password;

    /* Check the request body and assign it to an object */
    if(email && password) {
        let userData = {
            email: email,
            password: password
        };

        /* Use the above object to save it to the database */
        User.create(userData, (err) => {
            if(err) {
                console.error(err);
            };
            console.log('Saved Successfully');
        });
        res.status(200).send('Successfully saved!');
    }

};

