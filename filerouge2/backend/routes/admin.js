const express = require('express');
const router = express.Router();
const admincontrollers = require('../Controllers/admincontrollers');





router.post('/authentication', admincontrollers.signUp);
router.post('/login', admincontrollers.login);




module.exports = router;
  

