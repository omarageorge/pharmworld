import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('admin/products', { title: 'Products' });
});

router.get('/add', (req, res) => {
  res.render('admin/add', { title: 'Add' });
});

router.get('/order/:id', (req, res) => {
  res.render('admin/order', { title: 'Order' });
});

router.get('/orders', (req, res) => {
  res.render('admin/orders', { title: 'Orders' });
});

router.get('/update/:id', (req, res) => {
  res.render('admin/update', { title: 'Update' });
});

export default router;
