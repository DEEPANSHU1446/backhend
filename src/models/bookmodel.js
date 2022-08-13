const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
    BookName: {type: String,
    unique: true,
    required: true,
    },

    AuthorName: {type: String,
        unique: true,
        required: true,
        },
    Year: {type: Number,
        required: true,
        },
    Category:{type: String,
        required: true, 
    }
}, { timestamps: true });

module.exports = mongoose.model('Book', booksSchema)
