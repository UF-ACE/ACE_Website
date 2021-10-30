const express = require('express')

const PersonCtrl = require('../control/person-control')

const router = express.Router()

router.post('/person', PersonCtrl.createPerson)
router.put('/person/:name', PersonCtrl.updatePerson)
router.delete('/person/:name', PersonCtrl.deletePersonbyName)
router.get('/person/:title', PersonCtrl.getPersonbyTitle)
router.get('/person/:email', PersonCtrl.getPersonbyEmail)
router.get('/people', PersonCtrl.getPeople)
router.get('/people/:title', PersonCtrl.getPeoplebyTitle)

module.exports = router