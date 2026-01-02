
const express = require('express');
const router = express.Router();   
const deleteAnnouncement = require('../controller/deleteAnnouncement');
const verifyToken = require('../middleware/verifyToken');

router.delete('/deleteAnnouncement/:id', verifyToken, deleteAnnouncement); 

module.exports = router;