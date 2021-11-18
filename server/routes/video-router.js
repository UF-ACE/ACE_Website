const express = require('express')

const VideoCtrl = require('../control/video-control')

const router = express.Router()

router.post('/video', VideoCtrl.createVideo)
router.put('/video/:title', VideoCtrl.updateVideobyTitle)
router.put('/video/:id', VideoCtrl.updateVideobyID)
router.put('/video/:id', VideoCtrl.blacklistVideo)
router.delete('/video/:id', VideoCtrl.deleteVideobyID)
router.delete('/video/:title', VideoCtrl.deleteVideobyTitle)
router.get('/video/:title', VideoCtrl.getVideobyTitle)
router.get('/videos', VideoCtrl.getVideos)

module.exports = router