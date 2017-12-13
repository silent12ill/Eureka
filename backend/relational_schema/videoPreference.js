const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoPreferenceSchema = new Schema({
   likedVideoId: [String],
   dislikedVideoId: [String]
});

module.exports = VideoPreferenceSchema;
