const express = require('express')

const VideoCtrl = require('../control/video-control')

const router = express.Router()

router.post('/video', VideoCtrl.createVideo)
router.put('/video/:title', VideoCtrl.updateVideobyTitle)
router.put('/video/id/:id', VideoCtrl.updateVideobyID)
router.put('/video/BL/:id', VideoCtrl.blacklistVideo)
router.put('/video/UBL/:id', VideoCtrl.unblacklistVideo)
router.delete('/video/id/:id', VideoCtrl.deleteVideobyID)
router.delete('/video/:title', VideoCtrl.deleteVideobyTitle)
router.post('/video/search', VideoCtrl.getVideobyTitle)
router.post('/videos/search', VideoCtrl.getVideosbyTitle)
router.post('/videos/tags', VideoCtrl.getVideosbyTag)
router.get('/videos', VideoCtrl.getVideos)
router.get('/videos/BL', VideoCtrl.getVideosbyBlacklist)

module.exports = router