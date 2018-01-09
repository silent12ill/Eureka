const User = require("../db").User;
const bcrypt = require('bcrypt');

module.exports = userSignIn = (req, res) => {
    let email = req.body.params.email;
    let password = req.body.params.password;

    User.findOne({ email: email}, (err, user) => {
        console.log(user);
        if(err) {
            return err;
        } else if(!user) {
            res.status(202).send('User Does not exist.');
        } else {
            bcrypt.compare(password, user.password, (err, response) => {
                if(response === true) {
                    console.log(Object.keys(user.categoryPreference).length)
                    if(user.categoryPreference.preferences.length === 0) {
                        req.session.email = email;
                        res.status(201).send({email:email});
                    } else {
                      req.session.email = email;
                      let userData = user.categoryPreference;

                      console.log(userData);
                      res.status(200).send(userData).end();
                        console.log('Authentication successful!');
                    }
                } else {
                    console.log('Wrong password, try again');
                    res.send(203);
                }
            })
            }
        })

};