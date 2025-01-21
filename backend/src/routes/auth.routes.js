const express = require('express');
const {register , login} = require('../controllers/auth.controller');
const {registerValidation,loginValidation,validate} = require('../validators/auth.validator');

const router = express.Router();

router.post('/register',registerValidation,validate,register);
router.post('/login',loginValidation,validate,login);
// router.post('/logout', logout);  

module.exports = router;
