const editMessage = require("../controller/editMessage");
const express = require('express');
const router = express.Router();
const verifyToken = require("../middleware/verifyAdminToken");

router.put('/editMessage/:id', verifyToken, editMessage);

module.exports = router;