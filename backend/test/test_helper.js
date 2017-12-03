const mongoose = require('mongoose');

const dbUri = process.env.MONGODB_URI || "eureka-admin:eureka1234@ds125896.mlab.com:25896/eureka";

mongoose.connect('mongodb://' + dbUri, { useMongoClient: true });

mongoose.connection.once('open', function() {
    console.log('database is connected');
});

mongoose.connection.on('error', function(error) {
    console.log('database connection error: ' + error);
});
