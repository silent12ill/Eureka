const mongoose = require('mongoose');
const dbUri = require('./dbInfo').dbUri;
const Schema = mongoose.Schema;

/* Connection to the database */

mongoose.connect('mongodb://' + dbUri, { useMongoClient: true });

mongoose.connection.once('open', function() {
    console.log('database is connected');
});

mongoose.connection.on('error', function(error) {
    console.log('database connection error: ' + error);
});

/* List of Schemas */

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    }
});

/* Model for Schema */

const User = mongoose.model('User', UserSchema);

module.exports.User = User;
