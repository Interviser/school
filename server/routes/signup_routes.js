const exress = require('express');
const router = exress.Router();

const signUp_controller = require('../controller/signup');

router.post('/signup',signUp_controller);

module.exports = router;