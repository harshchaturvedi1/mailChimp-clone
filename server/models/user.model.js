const mongoose = require('mongoose');

const userSchema = {
    email:String,
    username:String,
    password:String
}

const User = mongoose.model('USER', userSchema);

module.exports = User;