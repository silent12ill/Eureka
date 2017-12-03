const mongoose = require('mongoose');
const dbUri = process.env.MONGODB_URI || "eureka-test-admin:eureka1234@ds127436.mlab.com:27436/eureka-test";

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://' + dbUri, { useMongoClient: true });

mongoose.connection.once('open', function() {
    console.log('database is connected');
});

mongoose.connection.on('error', function(error) {
    console.log('database connection error: ' + error);
});

beforeEach((done) => {
    mongoose.connection.collections['users'].drop(() => {
        done();
    });
});