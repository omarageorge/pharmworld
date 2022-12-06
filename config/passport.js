// import bcrypt from 'bcryptjs';
import LocalStrategy from 'passport-local';
import User from '../models/userModel.js';

export default function passportConfig(passport) {
  passport.use(
    new LocalStrategy((username, password, cb) => {
      User.findOne({ email: username }, (err, user) => {
        if (err) {
          return cb(err);
        }
        if (!user) {
          return cb(null, false);
        }

        /*  bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return cb(err);
          }
          if (result === true) {
            return cb(null, user);
          }
          return cb(null, false);
        }); */
      });
    })
  );

  passport.serializeUser((user, cb) => {
    process.nextTick(function () {
      return cb(null, {
        id: user._id,
        role: user.isAdmin,
      });
    });
  });

  passport.deserializeUser((user, cb) => {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
}
