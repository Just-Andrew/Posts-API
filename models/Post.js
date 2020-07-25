const mongoose = require('mongoose')
const FormData = require('../helpers/FormData')

const PostSchema = mongoose.Schema({
    ownerId: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    postedOn: {
        type: String,
        default: ''
    },
    likes: {
        type: Number,
        default: 0
    },
    editedOn: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('Post', PostSchema)