import { Router } from 'express';
import { ensureAuthenticated } from '../config/auth.js';
import { cartPage } from '../controllers/cartController.js';
import { indexPage, aboutPage } from '../controllers/productController.js';
import cart from '../middleware/cartMiddleware.js';

const router = Router();

// @route   GET /
// @desc    Render index page
// @access  Public/Authenticated
router.get('/', indexPage);

// @route   GET /about
// @desc    Render about products page
// @access  Public/Authenticated
router.get('/about', aboutPage);

// @route   GET /faq
// @desc    Render FAQ page
// @access  Public/Authenticated
router.get('/faq', cart, (req, res) => {
  res.render('pages/faq', {
    title: 'FAQ',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
    items: req.cart,
  });
});

// @route   GET /login
// @desc    Render login page
// @access  Public
router.get('/login', cart, (req, res) => {
  res.render('pages/login', { title: 'Login', items: req.cart });
});

// @route   GET /register
// @desc    Render register page
// @access  Public
router.get('/register', cart, (req, res) => {
  res.render('pages/register', { title: 'Register', items: req.cart });
});

// @route   GET /cart
// @desc    Render cart page
// @access  Private/Protected
router.get('/cart', ensureAuthenticated, cart, cartPage);

export default router;
