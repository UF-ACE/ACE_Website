const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tag = new Schema(
    {
        title: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tag', Tag)