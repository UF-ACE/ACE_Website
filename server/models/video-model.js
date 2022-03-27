const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Video = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: false },
        link: { type: String, required: true },
        blacklisted: { type: Boolean, required: true },
        tags: [ { type: String, required: false } ]
    },
    { timestamps: true },
)

Video.index({ title : 'text', description : 'text', 'tags.$**' : 'text' })

module.exports = mongoose.model('video', Video)