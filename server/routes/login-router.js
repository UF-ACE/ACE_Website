const express = require('express')
const LoginCtrl = require('../control/login-control')
const router = express.Router()

router.post('/login', LoginCtrl.LoginFunc);
router.post('/register', LoginCtrl.RegisterFunc);

module.exports = router