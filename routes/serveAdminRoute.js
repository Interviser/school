const express = require('express')

const router= express.Router()

const serveAdmin = require("../controller/serveAdmin")

router.get('/adminPage',serveAdmin)

module.exports = router