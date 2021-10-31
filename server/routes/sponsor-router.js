const express = require('express')

const SponsorCtrl = require('../control/sponsor-control')

const router = express.Router()

router.post('/sponsor', SponsorCtrl.createSponsor)
router.put('/sponsor/:name', SponsorCtrl.updateSponsor)
router.delete('/sponsor/:name', SponsorCtrl.deleteSponsorbyName)
router.get('/sponsor/:name', SponsorCtrl.getSponsorbyName)
router.get('/sponsors', SponsorCtrl.getSponsors)

module.exports = router