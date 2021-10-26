const express = require('express')

const VideoCtrl = require('../control/video-control')

const router = express.Router()

router.post('/video', VideoCtrl.createVideo)
router.put('/video/:title', VideoCtrl.updateVideo)
router.delete('/video/:title', VideoCtrl.deleteVideobyTitle)
router.get('/video/:title', VideoCtrl.getVideobyTitle)
router.get('/videos', VideoCtrl.getVideos)
router.get('/videos/:tag', VideoCtrl.getVideosbyTag)

module.exports = router