const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MemberSchema = new Schema({
    fullName: { type: String},
    role: { type: String},
    image: { type: String},
    level: { type: Number},
});
module.exports = mongoose.model('Member', MemberSchema);