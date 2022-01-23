const Login = require('../models/login-model')
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

        return res.status(200).json({ success: true })
    }).catch(err => console.log(err))
}

module.exports = {
    LoginFunc,
}