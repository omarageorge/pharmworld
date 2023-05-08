import { Router } from 'express';
import { ensureAuthenticated } from '../config/auth.js';
import { paymentPage } from '../controllers/payController.js';
import cart from '../middleware/cartMiddleware.js';

const router = Router();

router.use(ensureAuthenticated);

// @route   GET /pay/:id
// @desc    Render payment page
// @access  Private/User
router.get('/', paymentPage);

export default router;
