import { Router } from 'express';
import {
  getCartItems,
  addToCart,
  updateCartItem,
  deleteCartItem,
} from '../controllers/cartController';
import protect from '../middleware/authMiddleware.js';

const router = Router();

router.use(protect);

router
  .route('/')

  // @route   GET /api/cart
  // @desc    Get cart items
  // @access  Private/Protected
  .get(getCartItems)

  // @route   POST /api/cart
  // @desc    Create new cart
  // @access  Private/Protected
  .post(addToCart)

  // @route   PUT /api/cart
  // @desc    Update cart item
  // @access  Private/Protected
  .put(updateCartItem)

  // @route   DELETE /api/cart
  // @desc    Delete cart item
  // @access  Private/Protected
  .delete(deleteCartItem);

export default router;
