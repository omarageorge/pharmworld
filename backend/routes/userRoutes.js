import { Router } from 'express';
import protect from '../middleware/authMiddleware.js';
import {
  getUsers,
  registerUser,
  loginUser,
} from '../controllers/userController.js';

const router = Router();

// @route   GET /api/users
// @desc    Get all users
// @access  Private
router.get('/', protect, getUsers);

// @route   POST /api/users
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   POST /api/users/login
// @desc    Auth user & get token
// @access  Public
router.post('/login', loginUser);

export default router;
