require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);

const User = require('./models/userModel.js');

const connectDB = require('./config/db.js');
const passportConfig = require('./config/passport.js');

const indexRoutes = require('./routes/indexRoutes.js');
const authRoutes = require('./routes/authRouter.js');

// connectDB(); // Connect to database
// passportConfig(); // Configure passport

const app = express();
const PORT = process.env.PORT || 5000;

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

/* Middleware */
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static Routes */
app.use('/images', express.static('public'));
app.use('/styles', express.static('public/styles'));

/* Session */
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' }),
  })
);
app.use(passport.authenticate('session'));

/* View Engine */
app.set('view engine', 'ejs');

/* Routes */
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () =>
  console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
