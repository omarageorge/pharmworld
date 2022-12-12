import { Router } from 'express';
import { ensureAuthenticated } from '../config/auth.js';
import { cartPage } from '../controllers/cartController.js';
import { indexPage } from '../controllers/productController.js';
import cart from '../middleware/cartMiddleware.js';

const router = Router();

// @route   GET /
// @desc    Render index page
// @access  Public/Authenticated
router.get('/', indexPage);

router.get('/about', cart, (req, res) => {
  res.render('pages/about', {
    title: 'About',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
    items: req.cart,
  });
});

router.get('/faq', cart, (req, res) => {
  res.render('pages/faq', {
    title: 'FAQ',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
    items: req.cart,
  });
});

router.get('/login', cart, (req, res) => {
  res.render('pages/login', { title: 'Login', items: req.cart });
});

router.get('/register', cart, (req, res) => {
  res.render('pages/register', { title: 'Register', items: req.cart });
});

router.get('/cart', ensureAuthenticated, cart, cartPage);

export default router;
