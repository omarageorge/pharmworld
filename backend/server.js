import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

config(); // Load env vars
connectDB(); // Connect to database

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('backend/public'));

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use('/api/auth', authRoutes);
server.use('/api/products', productRoutes);
server.use('/api/orders', orderRoutes);
server.use('/api/cart', cartRoutes);

server.use(errorHandler);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
