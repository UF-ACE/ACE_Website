const express = require('express')
const LoginCtrl = require('../control/login-control')
const router = express.Router()

router.get('/login/:username/:password', LoginCtrl.LoginFunc)

module.exports = router