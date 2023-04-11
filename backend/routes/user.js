const express = require('express');
const router  = express.Router();

//contorller functions
const {loginUser,signupUser} = require('../controllers/user');

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup',signupUser)


module.exports = router

