import asyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';

// @route   GET /api/cart
// @desc    Get cart items
// @access  Private/Protected
export const getCartItems = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id })
    .populate('userId', 'name email')
    .populate('products.productId', 'name image price')
    .exec();

  res.status(200).json({
    success: true,
    cart,
  });
});

// @route   POST /api/cart
// @desc    Create new cart
// @access  Private/Protected
export const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;

  const cart = await Cart.findOne({ userId: req.user._id });

  const isProductExist = cart.products.some(
    (item) => item.productId.toString() === productId
  );

  if (isProductExist) {
    await Cart.findOneAndUpdate(
      { userId: req.user._id, 'products.productId': productId },
      {
        $inc: { 'products.$.quantity': quantity },
      }
    );
  } else {
    const newProduct = { productId, quantity };
    await Cart.findOneAndUpdate(
      { userId: req.user._id },
      {
        $push: { products: newProduct },
      }
    );
  }

  res.status(201).json({
    success: true,
  });
});

// @route   PUT /api/cart
// @desc    Update cart item
// @access  Private/Protected
export const updateCartItem = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;

  const cart = await Cart.findOneAndUpdate(
    { userId: req.user._id, 'products.productId': productId },
    {
      $set: { 'products.$.quantity': quantity },
    },
    { new: true }
  )
    .populate('userId', 'name email')
    .populate('products.productId', 'name image price')
    .exec();

  res.status(200).json({
    success: true,
    cart,
  });
});

// @route   DELETE /api/cart
// @desc    Delete cart item
// @access  Private/Protected
export const deleteCartItem = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  const cart = await Cart.findOneAndUpdate(
    { userId: req.user._id },
    {
      $pull: { products: { productId } },
    },
    { new: true }
  )
    .populate('userId', 'name email')
    .populate('products.productId', 'name image price')
    .exec();

  res.status(200).json({
    success: true,
    cart,
  });
});
