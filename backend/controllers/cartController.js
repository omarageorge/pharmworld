import asyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';

// @route   GET /api/cart
// @desc    Get cart items
// @access  Private/Protected
export const getCartItems = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id })
    .populate('user', 'name email')
    .populate('products.product', 'name image price')
    .exec();

  if (cart) {
    res.status(200).json(cart);
  } else {
    res.status(404);
    throw new Error('No items in cart');
  }
});

// @route   POST /api/cart
// @desc    Create new cart
// @access  Private/Protected
export const addToCart = asyncHandler(async (req, res) => {
  const { product, quantity } = req.body;

  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    const itemIndex = cart.products.findIndex((p) => p.product == product);

    if (itemIndex > -1) {
      const productItem = cart.products[itemIndex];
      productItem.quantity = quantity;
      cart.products[itemIndex] = productItem;
    } else {
      cart.products.push({
        product,
        quantity,
      });
    }

    const updatedCart = await cart.save();

    res.status(201).json(updatedCart);
  } else {
    const newCart = await Cart.create({
      user: req.user._id,
      products: [{ product, quantity }],
    });

    res.status(201).json(newCart);
  }
});

// @route   PUT /api/cart
// @desc    Update cart item
// @access  Private/Protected
export const updateCartItem = asyncHandler(async (req, res) => {
  const { product, quantity } = req.body;

  const cart = await Cart.findOneAndUpdate(
    { user: req.user._id, 'products.product': product },
    {
      $set: { 'products.$.quantity': quantity },
    },
    { new: true }
  )
    .populate('user', 'name email')
    .populate('products.product', 'name image price')
    .exec();

  res.status(200).json(cart);
});

// @route   DELETE /api/cart
// @desc    Delete cart item
// @access  Private/Protected
export const deleteCartItem = asyncHandler(async (req, res) => {
  const { product } = req.body;

  await Cart.findOneAndUpdate(
    { user: req.user._id },
    {
      $pull: { products: { product } },
    },
    { new: true }
  );

  res.status(200).json({ message: 'Item removed from cart' });
});
