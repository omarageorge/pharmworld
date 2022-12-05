const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Welcome' });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

router.get('/faq', (req, res) => {
  res.render('pages/faq', { title: 'FAQ' });
});

router.get('/login', (req, res) => {
  res.render('pages/login', { title: 'Login' });
});

router.get('/register', (req, res) => {
  res.render('pages/register', { title: 'Register' });
});

router.get('/cart', (req, res) => {
  res.render('pages/cart', { title: 'Cart' });
});

module.exports = router;
