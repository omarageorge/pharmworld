import { Router } from 'express';
import { ensureAuthenticated, ensureAdmin } from '../config/auth.js';
import {
  adminProductsPage,
  singleProductPage,
} from '../controllers/productController.js';

const router = Router();

// Protect all routes
router.use(ensureAuthenticated, ensureAdmin);

router.get('/', (req, res) => {
  res.render('admin/orders', { title: 'Orders', user: req.user });
});

// @route   GET /admin/products
// @desc    Render Admin products page
// @access  Private/Admin
router.get('/products', adminProductsPage);

router.get('/add', (req, res) => {
  res.render('admin/add', { title: 'Add', user: req.user });
});

router.get('/order/:id', (req, res) => {
  res.render('admin/order', { title: 'Order', user: req.user });
});

// @route   GET /admin/product/:id
// @desc    Render a single product
// @access  Private/Admin
router.get('/product/:id', singleProductPage);

export default router;
