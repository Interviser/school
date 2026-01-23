const express = require('express')

const router= express.Router()

const serveAdmin = require("../controller/serveAdmin")
const verifyAdminToken = require("../middleware/verifyAdminToken")

router.get('/adminPage',verifyAdminToken,serveAdmin)

module.exports = router