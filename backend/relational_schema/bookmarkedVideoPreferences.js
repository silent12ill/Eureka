const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookmarkedVideoSchema = new Schema({
    videoId: String,
    thumbnail: String,
    title: String
});

module.exports = BookmarkedVideoSchema;