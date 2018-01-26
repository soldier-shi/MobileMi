const mongoose = require('mongoose');
const shortid = require('shortid');
const db = require('./db')
//创建一个架构
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
}, {
    collection: "user"
});
//创建模型
const User = mongoose.model('User',userSchema);
module.exports = User;
