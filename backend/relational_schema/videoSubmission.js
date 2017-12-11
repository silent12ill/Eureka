const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSubmissionSchema = new Schema({
    videoId: String,
    dateAdded: String
});

module.exports = VideoSubmissionSchema;