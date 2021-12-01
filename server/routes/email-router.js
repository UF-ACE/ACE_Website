const express = require('express')

const EmailCtrl = require('../control/email-control')

const router = express.Router()

router.post('/email', EmailCtrl.sendEmail)
router.post('/email/db', EmailCtrl.logEmail)
router.get('/email/db', EmailCtrl.getEmails)

module.exports = router