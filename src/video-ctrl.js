const toPut = require('../reportWebVitals')

app.toPut = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a valid username',
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
                message: 'Video created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Video not created!',
            })
        })
}

updateVideo = async (req, res) => {
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
        video.name = body.name
        video.time = body.time
        video.rating = body.rating
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

deleteVideo = async (req, res) => {
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

getVideoById = async (req, res) => {
    await Video.findOne({ _id: req.params.id }, (err, video) => {
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

getVideos = async (req, res) => {
    await Video.find({}, (err, videos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!videos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Video not found` })
        }
        return res.status(200).json({ success: true, data: videos })
    }).catch(err => console.log(err))
}

module.exports = {
    createVideo,
    updateVideo,
    deleteVideo,
    getVideo,
    getVideoById,
}