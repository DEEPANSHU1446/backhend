const mongoose = require("mongoose")

const prodct = new mongoose.Schema({
    name: String,
    category: String,
    price: {
        type: Number,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model("product", prodct)