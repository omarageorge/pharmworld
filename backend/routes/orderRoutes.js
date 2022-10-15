import { Router } from 'express';
import {
  placeOrder,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderController.js';
import protect from '../middleware/authMiddleware.js';

const router = Router();

router.use(protect);

// @route   POST /api/orders
// @desc    Place new order
// @access  Private/Admin
router.post('/', placeOrder);

router
  .route('/:id')
  // @route   GET /api/orders/:id
  // @desc    Get order by ID
  // @access  Private/Admin
  .get(getOrderById)
  // @route   PUT /api/orders/:id
  // @desc    Update order to complete
  // @access  Private/Admin
  .put(updateOrderToPaid);

export default router;
