const Token = require('../models/token-model')
var path = require('path')


checkToken = async (userToken) => { 
    const globToken = await Token.findOne({}, {}, {sort: {'created_at' : -1 } })

    if (globToken && globToken.token === userToken) {
        return Promise.resolve(true)
    }
    
    return Promise.resolve(false)
}

updateToken = async (req, res) => { // Only one valid token at a time - update it each time someone logs in
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Token.findOne({}, {}, {sort: {'created_at' : -1 } }, (err, token) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Token not found!',
            })
        }
        token.token = body.token
        token
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    message: 'Token updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Token not updated!',
                })
            })
    })
}

module.exports = {
    updateToken,
    checkToken,
}