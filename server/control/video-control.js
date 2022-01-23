const Video = require('../models/video-model')
const TokenCtrl = require('../control/token-control')


getVideobyTitle = async (req, res) => { // Find a single video with a given title
    await Video.findOne({ $text: { $search: `\"${req.params.title}\"` } }, (err, video) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!video) {
            return res
                .status(404)
                .json({ success: false, error: 'Video not found' })
        }
        return res.status(200).json({ success: true, data: video })
    }).catch(err => console.log(err))
}

getVideos = async (req, res) => {   // Finds all videos
    await Video.find({ }, (err, videos) => {
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

updateVideobyTitle = async (req, res) => { // Finds and updates a video with a given title
    const auth = await TokenCtrl.checkToken(req.headers.token)
    if (!auth) {
        return res.status(400).json({
            success: false,
            error: 'You must be properly authenticated'
        })
    }
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update a video',
        })
    }
    Video.findOne({ $text: { $search: `\"${req.params.title}\"` } }, (err, video) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Video not found',
            })
        }
        if (video === null) {
            return res.status(404).json({
                message: 'Video not found',
            })
        }
        video.title = body.title
        video.description = body.description
        video.link = body.link
        video.blacklisted = body.blacklisted
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

deleteVideobyTitle = async (req, res) => {  // Finds and deletes a video with a given title
    const auth = await TokenCtrl.checkToken(req.headers.token)
    if (!auth) {
        return res.status(400).json({
            success: false,
            error: 'You must be properly authenticated'
        })
    }
    await Video.findOneAndDelete({ title: req.params.title }, (err, video) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!video) {
            return res
                .status(404)
                .json({ success: false, error: 'Video not found' })
        }

        return res.status(200).json({ success: true, data: video })
    }).catch(err => console.log(err))
}

createVideo = async (req, res) => { // Creates a video entry
    const auth = await TokenCtrl.checkToken(req.headers.token)
    if (!auth) {
        return res.status(400).json({
            success: false,
            error: 'You must be properly authenticated'
        })
    }
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a video',
        })
    }
    const video = new Video(body)
    if (!video) {
        return res.status(400).json({ success: false, error: err })
    }
    video
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: video._id,
                message: 'Video created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Video not created',
            })
        })
}

updateVideobyID = async (req, res) => {
    const auth = await TokenCtrl.checkToken(req.headers.token)
    if (!auth) {
        return res.status(400).json({
            success: false,
            error: 'You must be properly authenticated'
        })
    }
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Video.findOne({ _id: req.params.id }, (err, video) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Video not found!',
            })
        }
        video.title = body.title
        video.description = body.description
        video.link = body.link
        video.blacklisted = body.blacklisted
        video
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: video._id,
                    message: 'Video updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Video not updated!',
                })
            })
    })
}

deleteVideobyID = async (req, res) => {
    const auth = await TokenCtrl.checkToken(req.headers.token)
    if (!auth) {
        return res.status(400).json({
            success: false,
            error: 'You must be properly authenticated'
        })
    }
    await Video.findOneAndDelete({ _id: req.params.id }, (err, video) => {
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

blacklistVideo = async (req, res) => {  // Blacklists a video identified by database ID
    const auth = await TokenCtrl.checkToken(req.headers.token)
    if (!auth) {
        return res.status(400).json({
            success: false,
            error: 'You must be properly authenticated'
        })
    }
    Video.findOne({ _id: req.params.id }, (err, video) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Video not found!',
            })
        }
        video.blacklisted = true;
        video
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: video._id,
                    message: 'Video updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Video not updated!',
                })
            })
    })
}

unblacklistVideo = async (req, res) => {  // Blacklists a video identified by database ID
    const auth = await TokenCtrl.checkToken(req.headers.token)
    if (!auth) {
        return res.status(400).json({
            success: false,
            error: 'You must be properly authenticated'
        })
    }
    Video.findOne({ _id: req.params.id }, (err, video) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Video not found!',
            })
        }
        video.blacklisted = false;
        video
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: video._id,
                    message: 'Video updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Video not updated!',
                })
            })
    })
}

getVideosbyBlacklist = async (req, res) => {   // Finds all videos (not blacklisted)
    await Video.find({ blacklisted: false }, (err, videos) => {
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

module.exports = {
    getVideos,
    getVideobyTitle,
    updateVideobyTitle,
    updateVideobyID,
    deleteVideobyID,
    deleteVideobyTitle,
    createVideo,
    blacklistVideo,
    unblacklistVideo,
    getVideosbyBlacklist
}