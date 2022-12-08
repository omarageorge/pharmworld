import { Router } from 'express';
import { ensureAuthenticated, ensureAdmin } from '../config/auth.js';

const router = Router();

router.use(ensureAuthenticated, ensureAdmin);

router.get('/', (req, res) => {
  res.render('admin/products', { title: 'Products', user: req.user });
});

router.get('/add', (req, res) => {
  res.render('admin/add', { title: 'Add', user: req.user });
});

router.get('/order/:id', (req, res) => {
  res.render('admin/order', { title: 'Order', user: req.user });
});

router.get('/orders', (req, res) => {
  res.render('admin/orders', { title: 'Orders', user: req.user });
});

router.get('/update/:id', (req, res) => {
  res.render('admin/update', { title: 'Update', user: req.user });
});

export default router;
