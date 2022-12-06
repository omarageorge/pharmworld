import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import indexRoutes from './routes/indexRoutes.js';
import authRoutes from './routes/authRouter.js';

const app = express();
const PORT = process.env.PORT || 5000;

/* Configs */
config();
connectDB();

/* Middleware */
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));

/* Static Routes */
app.use(express.static('public'));

/* View Engine */
app.set('view engine', 'ejs');

/* Routes */
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () =>
  console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
