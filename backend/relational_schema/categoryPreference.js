const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoryPreferenceSchema = new Schema({
    category: String,
    subcategory: Array
});

module.exports = CategoryPreferenceSchema;