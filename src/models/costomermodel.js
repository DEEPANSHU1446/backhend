const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name: String,
    balance: {
        type: Number
    },
    address: String,
    age: Number,

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    isFreeAppUser:Boolean


}, {timestamps : true})

module.exports = mongoose.model("customer",user)