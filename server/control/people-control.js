const Person = require('../models/person-model')


getPersonByTitle = async (req, res) => {
    await Person.findOne({ _id: req.params.id }, (err, person) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!person) {
            return res
                .status(404)
                .json({ success: false, error: `Person not found` })
        }
        return res.status(200).json({ success: true, data: person })
    }).catch(err => console.log(err))
}

getPeople = async (req, res) => {
    await Person.find({}, (err, people) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!people.length) {
            return res
                .status(404)
                .json({ success: false, error: `Person not found` })
        }
        return res.status(200).json({ success: true, data: people })
    }).catch(err => console.log(err))
}











module.exports = {
    getPeople,
    getPersonByTitle,
}