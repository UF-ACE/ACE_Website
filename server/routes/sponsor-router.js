const express = require('express')

const SponsorCtrl = require('../control/sponsor-control')

const router = express.Router()

// Set up multer for storing images: -- https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
var multer = require('multer')
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({storage: storage})

router.post('/sponsor', upload.single('image'), SponsorCtrl.createSponsor)
router.put('/sponsor/:name', upload.single('image'), SponsorCtrl.updateSponsorbyName)
router.put('/sponsor/id/:id', upload.single('image'), SponsorCtrl.updateSponsorbyID)
router.delete('/sponsor/:name', SponsorCtrl.deleteSponsorbyName)
router.delete('/sponsor/id/:id', SponsorCtrl.deleteSponsorbyID)
router.get('/sponsor/:name', SponsorCtrl.getSponsorbyName)
router.get('/sponsors', SponsorCtrl.getSponsors)

module.exports = router