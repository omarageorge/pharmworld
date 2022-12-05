const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/userModel.js');

function passportConfig() {
  passport.use(
    new LocalStrategy((email, password, cb) => {
      User.findOne({ email }, (err, user) => {
        if (err) {
          return cb(err);
        }

        if (!user) {
          return cb(null, false, { message: 'Incorrect email.' });
        }

        if (!user.verifyPassword(password)) {
          return cb(null, false, { message: 'Incorrect password.' });
        }

        return cb(null, user);
      });
    })
  );

  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, { _id: user._id, name: user.name, role: user.isAdmin });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
}

module.exports = passportConfig;
