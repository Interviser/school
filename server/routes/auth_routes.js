const express = require('express');
const router = express.Router();

const auth_controller = require('../controller/auth.js');

router.get('/auth',auth_controller);

module.exports = router;