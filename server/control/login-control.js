const { v4: uuidv4 } = require('uuid');
const Login = require('../models/login-model')
const Token = require('../models/token-model')
var path = require('path')

LoginFunc = async (req, res) => { 
    await Login.findOne({ username: req.params.username }, (err, login) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!login) {
            return res
                .status(404)
                .json({ success: false, error: 'Username not found' })
        }

        if (login.password !== req.params.password) {
            return res.status(400).json({ success: false, error: 'Invalid credentials'})
        }
        // Generate new UUID on successful login
        const newToken = uuidv4()
        // Update valid token in database with new token
        Token.findOne({}, {}, {sort: {'created_at' : -1 } }, (err, token) => {
            if (err) {
                return res.status(404).json({
                    err,
                    message: 'Token not found!',
                })
            }
            token.token = newToken
            token
                .save()
                .catch(error => {
                    return res.status(404).json({
                        error,
                        message: 'Token not updated!',
                    })
                })
        })
        // Return the new token to the user
        return res.status(200).json({ success: true, token: newToken })
    }).catch(err => console.log(err))
}

module.exports = {
    LoginFunc,
}