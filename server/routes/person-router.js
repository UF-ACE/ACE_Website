const express = require('express')
const PersonCtrl = require('../control/person-control')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const authenticateToken = require('../middleware/authenticateToken')

// Set up multer for storing images: -- https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Correct the path to point to the main directory's `uploads` folder
    const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({storage: storage})

// We can use the middle ware for the entire thing if we set up specific routes for each function,
// router.use(authenticateToken)

router.post('/person', authenticateToken, upload.single('image'), PersonCtrl.createPerson)
router.put('/person/:name', authenticateToken, upload.single('image'), PersonCtrl.updatePersonbyName)
router.put('/person/id/:id', authenticateToken, upload.single('image'), PersonCtrl.updatePersonbyID)
router.delete('/person/:name', authenticateToken, PersonCtrl.deletePersonbyName)
router.delete('/person/id/:id', authenticateToken, PersonCtrl.deletePersonbyID)
router.get('/person/:title', authenticateToken, PersonCtrl.getPersonbyTitle)
router.get('/person/:email', authenticateToken, PersonCtrl.getPersonbyEmail)
router.get('/people', PersonCtrl.getPeople)
router.get('/people/:officer', PersonCtrl.getPeoplebyOfficer)
 
module.exports = router