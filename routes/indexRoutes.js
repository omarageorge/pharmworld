import { Router } from 'express';
import { ensureAuthenticated } from '../config/auth.js';
import { cartPage } from '../controllers/cartController.js';
import { indexPage } from '../controllers/productController.js';

const router = Router();

// @route   GET /
// @desc    Render index page
// @access  Public/Authenticated
router.get('/', indexPage);

router.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
  });
});

router.get('/faq', (req, res) => {
  res.render('pages/faq', {
    title: 'FAQ',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
  });
});

router.get('/login', (req, res) => {
  res.render('pages/login', { title: 'Login' });
});

router.get('/register', (req, res) => {
  res.render('pages/register', { title: 'Register' });
});

router.get('/cart', ensureAuthenticated, cartPage);

export default router;
