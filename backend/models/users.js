const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    username:String,
    email:String,
    subject:String,
    message:String,
    contact:String,
    work:String

})

const UserModel = mongoose.model("users",UserSchema)

module.exports = UserModel