const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

// Public
router.get('/check-username/:name', userController.checkUsername);

// Protected (User ตัวเอง)
router.get('/me', verifyToken, userController.getMe);
router.put('/me', verifyToken, userController.updateMe);
router.post('/me/avatar', verifyToken, userController.uploadAvatar);

// Admin Only หรือ Admin + Protected
router.get('/', verifyToken, isAdmin, userController.getAllUsers);
router.get('/:id', verifyToken, userController.getUserById);
router.put('/:id', verifyToken, isAdmin, userController.updateUser);
router.delete('/:id', verifyToken, isAdmin, userController.deleteUser);

// Admin Action
router.patch('/:id/status', verifyToken, isAdmin, userController.updateUserStatus);
router.patch('/:id/role', verifyToken, isAdmin, userController.updateUserRole);

module.exports = router;