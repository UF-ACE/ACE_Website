const express = require('express')
const router = express.Router()
const announcementCtrl = require('../control/announcement-control')

router.post('/announcement/', announcementCtrl.announcementCtrl.createAnnouncement)
router.put('announcement/:id', announcementCtrl.updateAnnouncement)
router.delete('announcement/:id', announcementCtrl.deleteAnnouncement)
router.get('announcement/latest', announcementCtrl.getAnnByLatest)
router.get('announcement/oldest', announcementCtrl.getAnnByOldest)

module.exports = router;