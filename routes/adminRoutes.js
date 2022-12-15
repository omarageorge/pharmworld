import { Router } from 'express';
import { ensureAuthenticated, ensureAdmin } from '../config/auth.js';
import { ordersPage, orderPage } from '../controllers/orderController.js';
import {
  adminProductsPage,
  singleProductPage,
} from '../controllers/productController.js';

const router = Router();

// Protect all routes
router.use(ensureAuthenticated, ensureAdmin);

router.get('/', ordersPage);

// @route   GET /admin/products
// @desc    Render Admin products page
// @access  Private/Admin
router.get('/products', adminProductsPage);

router.get('/add', (req, res) => {
  res.render('admin/add', { title: 'Add', user: req.user });
});

router.get('/order/:id', orderPage);

// @route   GET /admin/product/:id
// @desc    Render a single product
// @access  Private/Admin
router.get('/product/:id', singleProductPage);

export default router;
