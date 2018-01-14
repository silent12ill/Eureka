const User = require("../db").User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = userSignUp = (req, res) => {
    console.log(req.body.params);
    let email = req.body.params.email;
    let password = req.body.params.password;

    /* Check the request body and assign it to an object */
    if(email && password) {
        let userData = new User({
            email: email,
            password: password
        });

        User.findOne({email: userData.email}, (err, data) => {
            console.log(data);
            if(!data) {
                /* Use the above object to save it to the database */
                bcrypt.hash(userData.password, 10, (err, hash) => {
                    if(err) {
                        throw err;
                    } else {
                        userData.password = hash;
                        console.log("User Data", userData)
                        userData.save((err, user) => {
                            if(err) {
                                console.error(err);
                            }
                            user.token = jwt.sign({
                                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                                data: user
                            }, 'secret');

                            user.save((err, success) => {
                                if(err) {
                                    throw err;
                                } else {
                                    res.status(200).send({response: 'Successfuly signed up. Saved in db.'});
                                }
                            })
                        });
                    }
                });
            } else {
                console.log('User Already Exists');
                res.send(201);
            }
        });

    }
};
