const express = require('express')
const router = express.Router() 
const {register , login , logout}  = require('../controllers/authControllers')

router.post('/registerTEST', (req, res) => res.send("test"));
router.post('/register',  register);


module.exports = router;