


const Video = require('../models/video-model')


getVideobyTitle = async (req, res) => {
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
    getVideos,
    getVideobyTitle,
}