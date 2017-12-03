const User = require("../db").User;

module.exports = userSignIn = (req, res) => {
    let email = req.body.params.email;
    let password = req.body.params.password;

    User.findOne({ email: email}, (err, data) => {
        if(err) {
            return err;
        } else if(!data) {
            let err = new Error('User not found!');
            err.status = 401;
            return err;
        }
        bcrypt.compare(password. data.password, (err, res) => {
            if(res === true) {
                return data;
            }
        })
    })
};


