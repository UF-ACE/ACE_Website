const express = require('express')

const VideoCtrl = require('../control/video-control')

const router = express.Router()

//router.post('/movie', MovieCtrl.createMovie)
router.put('/video/:title', VideoCtrl.updateVideo)
//router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/video/:title', VideoCtrl.getVideobyTitle)
router.get('/videos', VideoCtrl.getVideos)
router.get('/videos/:tag', VideoCtrl.getVideosbyTag)

module.exports = router