const bodyParser = require("body-parser");
const express = require("express");
const userSignUp = require("./helpers/userSignUp");
const userSignIn = require("./helpers/userSignIn");
const db = require('./db').mongoose;
const app = express();


app.listen(process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.static('../client/src/index.html'));


/* List of Routes */

app.post('/api/signup', userSignUp);
app.post('/api/signin', userSignIn);
