const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');

// @route   POST /auth/register
// @desc    Register a new user
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
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

module.exports = {
  registerUser,
};
