const express = require('express')
const LogController = require('../controller/LogController')
const router = express.Router()


router
    .get('/', LogController.pageIni)
    .post('/', LogController.logPost)

module.exports = router