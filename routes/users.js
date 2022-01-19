const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user_Controller');

router.get('/profile', usersController.profile);
router.get('/Sign-up', usersController.signUp);
router.get('/Sign-in', usersController.signIn);

router.post('/create', usersController.create);


module.exports = router;