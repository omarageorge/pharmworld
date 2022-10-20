import { Router } from 'express';
import {
  getOrders,
  getOrderById,
  placeOrder,
  markOrderComplete,
} from '../controllers/orderController.js';
import protect from '../middleware/authMiddleware.js';

const router = Router();

router.use(protect);

router
  .route('/')

  // GET /api/orders
  // Get all orders
  // @access Private/Admin
  .get(getOrders)

  // @route   POST /api/orders
  // @desc    Place new order
  // @access  Private/Admin
  .post(placeOrder);

router
  .route('/:id')

  // @route   GET /api/orders/:id
  // @desc    Get order by ID
  // @access  Private/Admin
  .get(getOrderById)

  // @route   PUT /api/orders/:id
  // @desc    Update order to complete
  // @access  Private/Admin
  .put(markOrderComplete);

export default router;
