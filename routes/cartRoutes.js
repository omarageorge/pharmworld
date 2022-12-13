import { Router } from 'express';
import { ensureAuthenticated } from '../config/auth.js';
import { addToCart, deleteCartItem } from '../controllers/cartController.js';

const router = Router();

// Restrict access to admin only
router.use(ensureAuthenticated);

router
  .route('/')
  // @route   POST /cart
  // @desc    Add to cart
  // @access  Private/Protected
  .post(addToCart)

  // @route   DELETE /cart
  // @desc    Delete cart item
  // @access  Private/Protected
  .delete(deleteCartItem);

export default router;
