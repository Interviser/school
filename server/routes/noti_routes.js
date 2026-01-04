const express = require("express");
const router = express.Router()
const verifyToken = require("../middleware/verifyAdminToken")
const notification = require('../controller/notification')

router.post('/noti',verifyToken,notification)

module.exports = router;