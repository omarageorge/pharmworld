import { Router } from 'express';
import passport from 'passport';
import { registerUser, logoutUser } from '../controllers/userController.js';

const router = Router();

// @route   POST /auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   POST /auth/login
// @desc    Login a user
// @access  Public
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

// @route   POST /auth/register
// @desc    Register a new user
// @access  Public
router.post('/logout', logoutUser);

export default router;
