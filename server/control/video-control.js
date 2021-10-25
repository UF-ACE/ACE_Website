const Video = require('../models/video-model')


getVideobyTitle = async (req, res) => { // Find a single video with a given title
    await Video.findOne({ title: req.params.title }, (err, video) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!video) {
            return res
                .status(404)
                .json({ success: false, error: `Video not found` })
        }
        return res.status(200).json({ success: true, data: video })
    }).catch(err => console.log(err))
}

getVideos = async (req, res) => {   // Finds all videos
    await Video.find({}, (err, videos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!videos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Videos not found` })
        }
        return res.status(200).json({ success: true, data: videos })
    }).catch(err => console.log(err))
}

getVideosbyTag = async(req, res) => {   // Finds all videos with a given tag
    await Video.find({ tags: req.params.tag }, (err, videos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!videos.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Videos not found' })
        }
        return res.status(200).json({ success: true, data: videos })
    }).catch(err => console.log(err))
}

updateVideo = async (req, res) => { // Finds and updates a video based on its title
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update a video',
        })
    }
    Video.findOne({ title: req.params.title }, (err, video) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Video not found',
            })
        }
        video.title = body.title
        video.link = body.link
        video.description = body.description
        video.tags = body.tags
        video
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: video._id,
                    message: 'Video updated'
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Video not updated',
                })
            })
    })
}


module.exports = {
    getVideos,
    getVideobyTitle,
    getVideosbyTag,
    updateVideo,
}