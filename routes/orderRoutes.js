import { Router } from 'express';
import { ensureAuthenticated, ensureAdmin } from '../config/auth.js';
import {
  placeOrder,
  markOrderComplete,
} from '../controllers/orderController.js';

const router = Router();

/* Protect routes */
router.use(ensureAuthenticated);

// @route   POST /orders
// @desc    Place new order
// @access  Private/Admin
router.post('/', placeOrder);

// @route   PUT /orders/:id
// @desc    Update order to complete
// @access  Private/Admin
router.put('/:id', ensureAdmin, markOrderComplete);

export default router;
