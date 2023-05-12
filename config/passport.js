import LocalStrategy from 'passport-local';
import User from '../models/userModel.js';

export default function passportConfig(passport) {
  passport.use(
    new LocalStrategy(async (username, password, cb) => {
      try {
        const user = await User.findOne({ email: username });

        if (!user) {
          return cb(null, false);
        }

        if (await user.verifyPassword(password)) {
          return cb(null, false);
        }

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    })
  );

  passport.serializeUser((user, cb) => {
    process.nextTick(function () {
      return cb(null, {
        _id: user._id,
        name: user.name,
        isAdmin: user.isAdmin,
      });
    });
  });

  passport.deserializeUser((user, cb) => {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
}
