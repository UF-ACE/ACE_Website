const express = require('express')

const PersonCtrl = require('../control/people-control')

const router = express.Router()

//router.post('/movie', MovieCtrl.createMovie)
router.put('/person/:name', PersonCtrl.updatePerson)
//router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/person/:title', PersonCtrl.getPersonbyTitle)
router.get('/people', PersonCtrl.getPeople)
router.get('/people/:title', PersonCtrl.getPeoplebyTitle)

module.exports = router