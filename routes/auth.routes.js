const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

// Authentication Endpoints
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', verifyToken, authController.logout);
router.post('/change-password', verifyToken, authController.changePassword);
router.post('/refresh-token', authController.refreshToken);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.post('/verify-email', authController.verifyEmail);

module.exports = router;