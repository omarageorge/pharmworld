const { Router } = require('express');
const passport = require('passport');
const { registerUser } = require('../controllers/userController.js');

const router = Router();

router.post('/register', registerUser);

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.send('Login');
  }
);

router.post('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
