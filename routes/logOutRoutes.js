const express = require('express');
const router = express.Router();
const { logOut } = require('../controller/logOut');
router.post('/logout', logOut);
module.exports = router;