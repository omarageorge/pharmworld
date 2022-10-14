import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import { unlink } from 'fs/promises';

// @route   GET /api/products
// @desc    Get single product
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @route   GET /api/products/:id
// @desc    Get single product
// @access  Private/Admin
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @route   POST /api/products
// @desc    Create a product
// @access  Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
    image: req.file.filename,
    countInStock: req.body.countInStock,
    description: req.body.description,
  });

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400);
    throw new Error('Invalid product data');
  }
});

// @route   PUT /api/products/:id
// @desc    Update a product
// @access  Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    if (req.file) {
      if (product.image !== req.file.filename) {
        await unlink(`backend/public/${product.image}`);
      }
    }

    product.name = name;
    product.price = price;
    product.image = req.file ? req.file.filename : product.image;
    product.countInStock = countInStock;
    product.description = description;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @route   DELETE /api/products/:id
// @desc    Delete a product
// @access  Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await unlink(`backend/public/${product.image}`);
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});
