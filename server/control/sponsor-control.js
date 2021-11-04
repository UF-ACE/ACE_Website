const Sponsor = require('../models/sponsor-model')


getSponsorbyName = async (req, res) => { // Find a single sponsor with a given name
    await Sponsor.findOne({ name: req.params.name }, (err, sponsor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sponsor) {
            return res
                .status(404)
                .json({ success: false, error: 'Sponsor not found' })
        }
        return res.status(200).json({ success: true, data: sponsor })
    }).catch(err => console.log(err))
}

getSponsors = async (req, res) => {     // Finds all sponsors
    await Sponsor.find({}, (err, sponsors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!sponsors.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Sponsors not found' })
        }
        return res.status(200).json({ success: true, data: sponsors })
    }).catch(err => console.log(err))
}

updateSponsorbyName = async (req, res) => { // Finds and updates a sponsor with a given name
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update a sponsor',
        })
    }
    Sponsor.findOne({ name: req.params.name }, (err, sponsor) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Sponsor not found',
            })
        }
        sponsor.name = body.name
        sponsor.description = body.description
        sponsor.linkedin = body.linkedin
        sponsor.link = body.link
        sponsor
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: sponsor._id,
                    message: 'Sponsor updated'
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Sponsor not updated',
                })
            })
    })
}

deleteSponsorbyName = async (req, res) => {  // Finds and deletes a sponsor with a given name
    await Sponsor.findOneAndDelete({ name: req.params.name }, (err, sponsor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sponsor) {
            return res
                .status(404)
                .json({ success: false, error: 'Sponsor not found' })
        }

        return res.status(200).json({ success: true, data: sponsor })
    }).catch(err => console.log(err))
}

createSponsor = async (req, res) => { // Creates a sponsor entry
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a sponsor',
        })
    }
    const sponsor = new Sponsor(body)
    if (!sponsor) {
        return res.status(400).json({ success: false, error: err })
    }
    sponsor
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: sponsor._id,
                message: 'Sponsor created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Sponsor not created',
            })
        })
}

updateSponsorbyID = async (req, res) => { // Update a sponsor based on unique database ID
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Sponsor.findOne({ _id: req.params.id }, (err, sponsor) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Sponsor not found!',
            })
        }
        sponsor.name = body.name
        sponsor.description = body.description
        sponsor.linkedin = body.linkedin
        sponsor.link = body.link
        sponsor
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: sponsor._id,
                    message: 'Sponsor updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Sponsor not updated!',
                })
            })
    })
}

deleteSponsorbyID = async (req, res) => {
    await Sponsor.findOneAndDelete({ _id: req.params.id }, (err, sponsor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sponsor) {
            return res
                .status(404)
                .json({ success: false, error: `Sponsor not found` })
        }

        return res.status(200).json({ success: true, data: sponsor })
    }).catch(err => console.log(err))
}


module.exports = {
    getSponsors,
    getSponsorbyName,
    updateSponsorbyName,
    updateSponsorbyID,
    deleteSponsorbyName,
    deleteSponsorbyID,
    createSponsor,
}