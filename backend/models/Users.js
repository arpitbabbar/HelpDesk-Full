const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true,
        unique:true
    },
    doctorName:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
})

const Users = mongoose.model('users', UserSchema);
module.exports = Users;