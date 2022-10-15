import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

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

server.use('/api/users', userRoutes);
server.use('/api/products', productRoutes);
server.use('/api/orders', orderRoutes);

server.use(errorHandler);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
