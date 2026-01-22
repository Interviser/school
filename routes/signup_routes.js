const exress = require('express');
const router = exress.Router();
const verifyToken = require("../middleware/verifyAdminToken")

const signUp_controller = require('../controller/signup');

router.post('/signup',verifyToken,signUp_controller);

module.exports = router;