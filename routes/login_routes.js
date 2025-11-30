const express = require('express');
const router = express.Router();

const login_controller = require('../controller/login.js');

router.post('/login',login_controller);

module.exports = router;