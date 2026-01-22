
const express = require('express');
const router = express.Router();   
const deleteAnnouncement = require('../controller/deleteAnnouncement');
const verifyToken = require('../middleware/verifyAdminToken');

router.delete('/deleteAnnouncement/:_id', verifyToken, deleteAnnouncement); 

module.exports = router;