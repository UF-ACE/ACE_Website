const express = require('express')
const TokenCtrl = require('../control/token-control')
const router = express.Router()

router.get('/token/:token', TokenCtrl.checkTokenRoute)

module.exports = router