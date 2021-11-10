const Tag = require('../models/tag-model')

getTagbyTitle = async (req, res) => { // Find a tag video with a given title
    await Tag.findOne({ title: req.params.title }, (err, tag) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tag) {
            return res
                .status(404)
                .json({ success: false, error: 'tag not found' })
        }
        return res.status(200).json({ success: true, data: tag })
    }).catch(err => console.log(err))
}

createTag = async (req, res) => { // Creates a tag entry
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a tag',
        })
    }
    const tag = new Tag(body)
    if (!tag) {
        return res.status(400).json({ success: false, error: err })
    }
    tag
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: tag._id,
                message: 'Tag created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Tag not created',
            })
        })
}

module.exports = {
    getTagbyTitle,
    createTag,
}