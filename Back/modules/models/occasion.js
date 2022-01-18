const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OccasionSchema = new Schema({
    title: { type: String },
    brief: { type: String },
    image: { type: String },
    date: { type: String},
});
module.exports = mongoose.model('Occasion', OccasionSchema);