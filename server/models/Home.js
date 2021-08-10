const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    id:{type:String, unique:true},
    city: String,
    price: Number,
    status: String,
    builder: String,
    possession:String    
})

const HomeModel = mongoose.model('Home', HomeSchema);
module.exports = HomeModel;
