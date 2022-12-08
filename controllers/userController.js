import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @route   GET /auth/redirect
// @desc    Redirect a user to the appropriate page
// @access  Public/Authenticated
export const redirectUser = (req, res) => {
  if (req.user.isAdmin) {
    res.redirect('/admin');
  } else {
    res.redirect('/');
  }
};

// @route   POST /auth/register
// @desc    Register a new user
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  await User.create({
    name,
    email,
    password,
  });

  res.redirect('/login');
});

// @route   POST /auth/logout
// @desc    Logout a user
// @access  Private
export const logoutUser = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};
