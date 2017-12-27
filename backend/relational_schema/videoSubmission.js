const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSubmissionSchema = new Schema({
    videoId: String,
    dateSubmitted: String
});

module.exports = VideoSubmissionSchema;