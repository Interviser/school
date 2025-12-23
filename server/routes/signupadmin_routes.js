const exress = require('express');
const router = exress.Router();

const signUp_controller = require('../controller/registerAdmin');

router.post('/signupAdmin',signUp_controller);

module.exports = router;