const express = require('express')

const SponsorCtrl = require('../control/sponsor-control')

const router = express.Router()

router.post('/sponsor', SponsorCtrl.createSponsor)
router.put('/sponsor/:name', SponsorCtrl.updateSponsorbyName)
router.put('/sponsor/id/:id', SponsorCtrl.updateSponsorbyID)
router.delete('/sponsor/:name', SponsorCtrl.deleteSponsorbyName)
router.delete('/sponsor/id/:id', SponsorCtrl.deleteSponsorbyID)
router.get('/sponsor/:name', SponsorCtrl.getSponsorbyName)
router.get('/sponsors', SponsorCtrl.getSponsors)

module.exports = router