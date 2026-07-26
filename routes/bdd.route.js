const express = require('express')
const router = express.Router()
const bddtestConn = require('../controllers/bddtest')

router.get('/test' ,bddtestConn )

module.exports = router