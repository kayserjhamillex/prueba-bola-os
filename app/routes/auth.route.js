const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');
/* GET home page. */
router.get('/login', authCtrl.loginForm);
router.post('/login', authCtrl.loginAction);
router.get('/logout', authCtrl.logoutAction);
module.exports = router;
