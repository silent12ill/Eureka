const bodyParser = require("body-parser");
const express = require("express");


/* Helper Functions */
const userSignUp = require("./helpers/userSignUp");
const userSignIn = require("./helpers/userSignIn");
const addVideo = require("./helpers/addVideo");
const getFromDB = require("./helpers/getFromDB");
const saveInitialData = require('./helpers/saveInitialData');

const db = require('./db').mongoose;
const app = express();
const session = require('express-session');


app.listen(process.env.PORT || 3000);
console.log('Server listening ');

/* use sessions for tracking login */
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));

/* parse incoming requests */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../client/src/index.html'));


/* List of Routes */

app.post('/api/signup', userSignUp);
app.post('/api/signin', userSignIn);
app.post('/api/addVideo', addVideo);
app.get('api/saveInitialData', saveInitialData);
//app.get('/api/getFromDB', getFromDB);



/* catch 404 and forward to error handler */

app.use(function (req, res, next) {
    const err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

/*
* define as the last app.use callback
* error handler
*/

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});
