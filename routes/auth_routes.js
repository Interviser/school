const express = require('express');
const router = express.Router();

const auth_controller = require('../controller/auth.js');
const verifyToken = require('../middleware/verifyToken.js');

router.get('/auth',verifyToken,auth_controller);

module.exports = router;