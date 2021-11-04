const express = require('express')

const PersonCtrl = require('../control/person-control')

const router = express.Router()

router.post('/person', PersonCtrl.createPerson)
router.put('/person/:name', PersonCtrl.updatePersonbyName)
router.put('/person/:id', PersonCtrl.updatePersonbyID)
router.delete('/person/:name', PersonCtrl.deletePersonbyName)
router.delete('/person/:id', PersonCtrl.deletePersonbyID)
router.get('/person/:title', PersonCtrl.getPersonbyTitle)
router.get('/person/:email', PersonCtrl.getPersonbyEmail)
router.get('/people', PersonCtrl.getPeople)
router.get('/people/:officer', PersonCtrl.getPeoplebyOfficer)

module.exports = router