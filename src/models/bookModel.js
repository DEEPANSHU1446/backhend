const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({

    name: String,
    authorid: {
        type: ObjectId,
        ref: "Newauthor"
    },
    price: Number,
    ratings: Number,
    publisherid: {
        type: ObjectId,
        ref: "Newpublisher"
    },
    isHardCover : {type:Boolean,
    default:false}

}, { timestamps: true });

module.exports = mongoose.model('Latestbook', bookSchema)
