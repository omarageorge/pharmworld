import { Router } from 'express';
import { ensureAuthenticated } from '../config/auth.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Welcome',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
  });
});

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

router.get('/cart', ensureAuthenticated, (req, res) => {
  res.render('pages/cart', {
    title: 'Cart',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
  });
});

export default router;
