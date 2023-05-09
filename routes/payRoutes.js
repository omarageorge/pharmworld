import { Router } from 'express';
import { ensureAuthenticated } from '../config/auth.js';
import { paymentPage } from '../controllers/payController.js';
import cart from '../middleware/cartMiddleware.js';

const router = Router();

router.use(ensureAuthenticated);

// @route   POST /pay
// @desc    Render payment page
// @access  Private/User
router.post('/', paymentPage);

export default router;
