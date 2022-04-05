const Token = require('../models/token-model')
var path = require('path')


checkToken = async (userToken, res) => { 
    const globToken = await Token.findOne({}, {}, {sort: {'created_at' : -1 } })

    if (globToken && globToken.token === userToken) {
        return Promise.resolve(true)
    }
    return Promise.resolve(false)
}

checkTokenRoute = async (req, res) => {
    const globToken = await Token.findOne({}, {}, {sort: {'created_at' : -1 } })
    userToken = req.params.token
    if (globToken && globToken.token === userToken) {
        return res.status(200).json({
            success: true,
            message: 'Token has been verified'
        })
    }
    return res.status(401).json({
        success: false,
        message: 'Token could not be verified'
    })
}

module.exports = {
    checkToken,
    checkTokenRoute,
}