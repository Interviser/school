const express = require("express");
const router = express.Router()

const notification = require('../controller/notification')

router.post('/noti',notification)

module.exports = router;