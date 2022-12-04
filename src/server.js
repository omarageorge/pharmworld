import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import connectDB from './config/db.js';

config(); // Load env vars
connectDB(); // Connect to database

const app = express();
const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static Routes */
app.use('/images', express.static('src/public'));
app.use('/styles', express.static('src/public/styles'));

/* View Engine */
app.set('views', 'src/views');
app.set('view engine', 'ejs');

/* Standard Routes */
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Welcome' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

app.get('/faq', (req, res) => {
  res.render('pages/faq', { title: 'FAQ' });
});

app.get('/login', (req, res) => {
  res.render('pages/login', { title: 'Login' });
});

app.get('/register', (req, res) => {
  res.render('pages/register', { title: 'Register' });
});

app.get('/cart', (req, res) => {
  res.render('pages/cart', { title: 'Cart' });
});

app.listen(PORT, () =>
  console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
