const Announcement = require('../models/announcement-model');
const TokenCtrl = require('../control/token-control');

createAnnouncement = async(req, res) => { //Creates an announcement
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
            error: 'You must provide body text',
        })
    }
    const announcement = new Announcement(body)
    if (!announcement) {
        return res.status(400).json({ success: false, error: err })
    }
    announcement
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: announcement._id,
                message: 'Announcement created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Announcement not created',
            })
        })
}

getAnnByLatest = async(req, res) => { // Return a list of latest announcements
    await Announcement.find({}, {}, { sort: { createdAt: -1 } },  (err, ann) => {
        if (err) {
            return res.status(400).json({ success: false, error: err})
        }
        if (!ann.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Announcements not found' })
        }
        return res.status(200).json({success: true, data: ann})
    })
    .catch(err => console.log(err)) 
}

getAnnByOldest = async(req, res) => { //Return a list of oldest announcements
    await Announcement.find( {}, {}, { sort: { createdAt: 1 } }, (err, ann) => {
        if (err) {
            return res.status(400).json({ success: false, error: err})
        }
        if (!ann.length) {
            return res
                .status(404)
                .json({success: false, error: 'Announcements not found'})
        }
        return res
            .status(200)
            .json({success: true, data: ann})
    })
    .catch(err => console.log(err))
}

updateAnnouncement = async(req, res) => { //Updates an announcement by ID
    const auth = await TokenCtrl.checkToken(req.headers.token)
    if (!auth) {
        return res.status(400).json({
            success: false,
            error: 'You must be properly authenticated'
        })
    }
    const body = req.body;
    await Announcement.findOne( {_id: req.params.id}, (err, ann) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Announcement not found!',
            })
        }
        console.log(req)
        ann.body = body.body
        ann
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: ann._id,
                message: 'Announcement updated!',
            })
        })
        .catch(error => {
            return res.status(404).json({
                error,
                message: 'Announcement not updated!',
            })
        })
    })
}

deleteAnnouncement = async(req, res) => { // Deletes an announcement by its ID 
    const auth = await TokenCtrl.checkToken(req.headers.token)
    if (!auth) {
        return res.status(400).json({
            success: false,
            error: 'You must be properly authenticated'
        })
    }
    await Announcement.findOneAndDelete({ _id: req.params.id }, (err, ann) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!ann) {
            return res
                .status(404)
                .json({ success: false, error: `Announcement not found` })
        }
        return res.status(200).json({ success: true, data: ann })
    }).catch(err => console.log(err))
}

module.exports = {
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    getAnnByLatest,
    getAnnByOldest
}


