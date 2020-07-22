const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    ownerId: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    wasPostedOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema)