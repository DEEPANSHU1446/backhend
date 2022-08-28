const mongoose = require("mongoose")
const abc = mongoose.Schema.Types.ObjectId

const orders = new mongoose.Schema({


    userId: abc,
    productId: abc,
    amount: Number,
    isFreeAppUser: Boolean,
    date: String

}, { timestamps: true })

module.exports= mongoose.model("order",orders)
