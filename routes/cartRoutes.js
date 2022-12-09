import { Router } from 'express';
import { ensureAuthenticated, ensureAdmin } from '../config/auth.js';
import { addToCart } from '../controllers/cartController.js';

const router = Router();

// Restrict access to admin only
router.use(ensureAuthenticated, ensureAdmin);

router
  .route('/')
  // @route   POST /cart
  // @desc    Add to cart
  // @access  Private/Protected
  .post(addToCart);

export default router;
