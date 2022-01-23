const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Token = new Schema (
    {
        token: { type: String, required: true }
    }
)

module.exports = mongoose.model('token', Token)