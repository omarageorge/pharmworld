import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import { config } from 'dotenv';
import passport from 'passport';
import flash from 'connect-flash';
import session from 'express-session';
// import session from 'cookie-session';

import MongoStore from 'connect-mongo';

import methodOverride from 'method-override';

import connectDB from './config/db.js';

import authRoutes from './routes/authRouter.js';
import adminRoutes from './routes/adminRoutes.js';
import indexRoutes from './routes/indexRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

import passportConfig from './config/passport.js';

const app = express();
const PORT = process.env.PORT || 5000;

/* Configs */
config();
connectDB();
passportConfig(passport);

/* View Engine */
app.set('view engine', 'ejs');

/* Middleware */
app.use(flash());
app.use(helmet());
app.use(morgan('dev'));

/* Bodyparser */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static Routes */
app.use(express.static('public'));

/* Method Override */
app.use(methodOverride('_method'));

/* Express Session */
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        process.env.NODE_ENV === 'production'
          ? process.env.MONGO_URI_PRODUCTION
          : process.env.MONGO_URI_DEVELOPMENT,
    }),
  })
);
app.use(passport.authenticate('session'));

/* Routes */
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

app.listen(PORT, () =>
  console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
