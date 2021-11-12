const express = require('express')

const TagCtrl = require('../control/tag-control')

const router = express.Router()

router.post('/tag', TagCtrl.createTag)
router.get('/tag/:title', TagCtrl.getTagbyTitle)

module.exports = router