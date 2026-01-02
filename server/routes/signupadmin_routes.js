const exress = require('express');
const router = exress.Router();
const verifyToken = require("../middleware/verifyToken")    

const signUp_controller = require('../controller/registerAdmin');

router.post('/signupAdmin',verifyToken,signUp_controller);

module.exports = router;