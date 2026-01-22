const express = require('express');
const router = express.Router();
const changePassword = require('../controller/changePassword');
const verifyToken = require("../middleware/verifyToken");

router.put('/changeStuPassword/', verifyToken, changePassword);

module.exports = router;