const User = require("../db").User;
const bcrypt = require('bcryptjs');

module.exports = userSignIn = (req, res) => {
    let email = req.body.params.email;
    let password = req.body.params.password;

    console.log(email + ' ' + password);
    // User.findOne({ email: email}, (err, data) => {
    //     if(err) {
    //         return err;
    //     } else if(!data) {
    //         let err = new Error('User not found!');
    //         err.status = 401;
    //         return err;
    //     }
    //     bcrypt.compare(password. data.password, (err, res) => {
    //         if(res === true) {
    //             res.status(200).send('Authentication Successful');
    //         }
    //     })
    // })
    let hash = bcrypt.hashSync(password, 10);

    User.findOne({ email: email}, (err, user) => {
        console.log(user);
        if(err) {
            return err;
        } else if(!user) {
            res.status(401).send('Invalid authentication');
        } else {
            console.log(bcrypt.compareSync(password, hash));
            // bcrypt.compare(password, user.password, (err, response) => {
            //     console.log(response)
            //     console.log(password, ' ', user.password)
            //     if(response === true) {
            //         console.log(Object.keys(user.categoryPreference).length)
            //         if(user.categoryPreference['category'].length === 0) {
            //             res.send(201);
            //         } else {
            //             res.send(200);
            //             console.log('Authentication successful!');
            //         }
            //     }
            // })
            if(bcrypt.compareSync(password, hash)) {
                if(user.categoryPreference['category'].length === 0) {
                    res.send(201);
                } else {
                    res.send(200);
                    console.log('Authentication successful!');
                }
            }
        }
    })
};


