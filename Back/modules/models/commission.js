const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommissionSchema = new Schema({
    title: { type: String },
    details: { type: String },
   image: { type: String },
});
module.exports = mongoose.model('Commission', CommissionSchema);