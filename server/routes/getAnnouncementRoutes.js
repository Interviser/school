const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();
const getAnnouncement = require('../controller/getAnnouncement');  
router.post('/announcements', verifyToken, getAnnouncement);

module.exports = router;