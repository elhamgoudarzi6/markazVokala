const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContactUsSchema = new Schema({
    fullName: { type: String},
    email: { type: String},
    title: { type: String},
    message:{ type: String},
});
module.exports = mongoose.model('ContactUs', ContactUsSchema);