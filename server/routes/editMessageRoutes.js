const editMessage = require("../controller/editMessage");
const express = require('express');
const router = express.Router();
const verifyToken = require("../middleware/verifyAdminToken");

router.put('/editMessage/:_id', verifyToken, editMessage);

module.exports = router;