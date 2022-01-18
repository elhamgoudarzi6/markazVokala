const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    title: { type: String },
    author: { type: String },
    details: { type: String },
    image: { type: String },
    imageDescription: { type: String },
    date: { type: String},
});
module.exports = mongoose.model('Article', ArticleSchema);
