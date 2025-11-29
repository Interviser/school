const exress = require('express');
const router = exress.Router();

const signUp_controller = require('../controller/login.js');

router.get('/login',signUp_controller);

module.exports = router;