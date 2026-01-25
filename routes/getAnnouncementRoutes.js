const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();
const getAnnouncement = require('../controller/getAnnouncement');  
const {cacheGetAnnouncements} = require('../middleware/cacheGetAnnouncements');
router.get('/announcements', verifyToken, cacheGetAnnouncements, getAnnouncement);

module.exports = router;