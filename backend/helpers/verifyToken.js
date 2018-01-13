const User = require("../db").User;

const verifyToken = (req, res) => {
  let email = req.query.email;
  let token = req.query.token;
  console.log("Email:", email, "Token", token);

  User.findOne({token: token}, (err, data) => {
  	if (err) {
      throw err;
  	} else {
  		console.log("Data", data);
  		res.send({userData: data});
  	}
  })

}



module.exports = verifyToken;