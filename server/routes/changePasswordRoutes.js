const express = require('express');
const router = express.Router();
const changePassword = require('../controller/changePassword');
const verifyToken = require("../middleware/verifyAdminToken");

router.put('/changePassword', verifyToken, changePassword);

module.exports = router;
