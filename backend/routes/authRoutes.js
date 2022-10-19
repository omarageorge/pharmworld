import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';

const router = Router();

// @route   POST /api/auth
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Auth user & get token
// @access  Public
router.post('/login', loginUser);

export default router;
