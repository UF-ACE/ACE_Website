const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Person = new Schema(
    {
        name: { type: String, required: true },
        officer: { type: Boolean, required: true },
        title: { type: String, required: true },
        email: { type: String, required: true },
        linkedin: { type: String, required: true },
        password: { type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('person', Person)