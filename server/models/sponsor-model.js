const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sponsor = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        linkedin: { type: String, required: true },
        link: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('sponsor', Sponsor)