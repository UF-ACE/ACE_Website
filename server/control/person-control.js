const Person = require('../models/person-model')


getPersonbyTitle = async (req, res) => {    // Finds a single person with a given title
    await Person.findOne({ title: req.params.title }, (err, person) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!person) {
            return res
                .status(404)
                .json({ success: false, error: 'Person not found' })
        }
        return res.status(200).json({ success: true, data: person })
    }).catch(err => console.log(err))
}

getPeople = async (req, res) => {   // Finds all people
    await Person.find({}, (err, people) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!people.length) {
            return res
                .status(404)
                .json({ success: false, error: 'People not found' })
        }
        return res.status(200).json({ success: true, data: people })
    }).catch(err => console.log(err))
}

getPeoplebyTitle = async(req, res) => {   // Finds all people with a given title
    await Person.find({ title: req.params.title }, (err, people) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!people.length) {
            return res
                .status(404)
                .json({ success: false, error: 'People not found' })
        }
        return res.status(200).json({ success: true, data: videos })
    }).catch(err => console.log(err))
}

updatePerson = async (req, res) => {    // Finds and updates a person based on their name
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update a person',
        })
    }
    Person.findOne({ name: req.params.name }, (err, person) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Person not found',
            })
        }
        person.name = body.name
        person.officer = body.officer
        person.title = body.title
        person.email = body.email
        person.linkedin = body.linkedin
        person.password = body.password
        person
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: person._id,
                    message: 'Person updated'
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Person not updated',
                })
            })
    })
}

deletePersonbyName = async (req, res) => {  // Find and deletes a person with a given name
    await Person.findOneAndDelete({ name: req.params.name }, (err, person) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!person) {
            return res
                .status(404)
                .json({ success: false, error: 'Person not found' })
        }

        return res.status(200).json({ success: true, data: person })
    }).catch(err => console.log(err))
}

createPerson = async (req, res) => {    // Create a person entry
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a person',
        })
    }
    const person = new Person(body)
    if (!person) {
        return res.status(400).json({ success: false, error: err })
    }
    person
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: person._id,
                message: 'Person created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Person not created',
            })
        })
}


module.exports = {
    getPeople,
    getPersonbyTitle,
    getPeoplebyTitle,
    updatePerson,
    deletePersonbyName,
    createPerson,
}