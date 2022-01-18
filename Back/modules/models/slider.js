const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SliderSchema = new Schema({
    categoryID:{ type:mongoose.Schema.ObjectId,require, ref:'Category'},
    imageurl: { type: String, required: true },
    imageDescription:{type:String},
    gallery:{type:Array},
},{toJSON:{virtuals:true}});
SliderSchema.virtual('Category',{
    ref:'Category',
    localField:'categoryID',
    foreignField:'_id',
});
module.exports = mongoose.model('Slider', SliderSchema);
