import { Router } from 'express';
import ensureAuthenticated from '../config/auth.js';

const router = Router();

router.get('/', ensureAuthenticated, (req, res) => {
  res.render('pages/index', { title: 'Welcome', user: req.user });
});

router.get('/about', ensureAuthenticated, (req, res) => {
  res.render('pages/about', { title: 'About', user: req.user });
});

router.get('/faq', ensureAuthenticated, (req, res) => {
  res.render('pages/faq', { title: 'FAQ', user: req.user });
});

router.get('/login', (req, res) => {
  res.render('pages/login', { title: 'Login' });
});

router.get('/register', (req, res) => {
  res.render('pages/register', { title: 'Register' });
});

router.get('/cart', ensureAuthenticated, (req, res) => {
  res.render('pages/cart', { title: 'Cart', user: req.user });
});

export default router;
