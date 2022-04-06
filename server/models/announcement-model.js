const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Announcement = new Schema(
    {
        body: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('announcement', Announcement)