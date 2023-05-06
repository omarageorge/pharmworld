import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import Cart from '../models/cartModel.js';
import { unlink } from 'fs/promises';

// @route   GET /
// @desc    Render index products page
// @access  Public/Authenticated
export const indexPage = asyncHandler(async (req, res) => {
  const products = await Product.find({ countInStock: { $gte: 1 } });

  let cart;

  if (req.isAuthenticated()) {
    cart = await Cart.findOne({ user: req.user._id })
      .populate('user', 'name email')
      .populate('products.product', 'name price countInStock minimumOrder')
      .exec();
  }

  res.render('pages/index', {
    title: 'Welcome',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
    products,
    items: req.isAuthenticated() && cart ? cart.products : [],
  });
});

// @route   GET /about
// @desc    Render about products page
// @access  Public/Authenticated
export const aboutPage = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  let cart;

  if (req.isAuthenticated()) {
    cart = await Cart.findOne({ user: req.user._id })
      .populate('user', 'name email')
      .populate('products.product', 'name price countInStock minimumOrder')
      .exec();
  }

  res.render('pages/about', {
    title: 'About',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
    products,
    items: req.isAuthenticated() && cart ? cart.products : [],
  });
});

// @route   GET /admin/products
// @desc    Render Admin products page
// @access  Private/Admin
export const adminProductsPage = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.render('admin/products', {
    title: 'Products',
    user: req.user,
    products,
  });
});

// @route   GET /admin/product/:id
// @desc    Render a single product
// @access  Private/Admin
export const singleProductPage = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.render('admin/product', {
    title: 'Product',
    user: req.user,
    product,
  });
});

// @route   POST /products
// @desc    Add a product
// @access  Private/Admin
export const addProduct = asyncHandler(async (req, res) => {
  await Product.create({
    name: req.body.name,
    price: req.body.price,
    image: req.file.filename,
    countInStock: req.body.countInStock,
    minimumOrder: req.body.minimumOrder,
    description: req.body.description,
  });

  res.redirect('/admin/products');
});

// @route   PUT /admin/products/:id
// @desc    Update a product
// @access  Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, countInStock, minimumOrder } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    if (req.file) {
      if (product.image !== req.file.filename) {
        await unlink(`public/images/${product.image}`);
      }
    }

    product.name = name;
    product.price = price;
    product.image = req.file ? req.file.filename : product.image;
    product.countInStock = countInStock;
    product.minimumOrder = minimumOrder;
    product.description = description;

    await product.save();
    res.redirect('/admin/products');
  } else {
    res.redirect('/admin/products');
  }
});

// @route   DELETE /products/:id
// @desc    Delete a product
// @access  Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await unlink(`public/images/${product.image}`);
    await product.remove();
    res.redirect('/admin/products');
  } else {
    res.redirect('/admin/products');
  }
});
