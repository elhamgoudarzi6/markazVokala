const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MoazedatSchema = new Schema({
    title: { type: String },
    details: { type: String },
    image: { type: String },
    imageDescription: { type: String },
    date: { type: String },
    time: { type: String },
});
module.exports = mongoose.model('Moazedat', MoazedatSchema);