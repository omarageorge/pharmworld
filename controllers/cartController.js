import asyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';

// @route   GET   /cart
// @desc    render cart page
// @access  Private/Protected
export const cartPage = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id })
    .populate('user', 'name email')
    .populate('products.product', 'name price countInStock minimumOrder')
    .exec();

  res.render('pages/cart', {
    title: 'Cart',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
    items: cart.products,
  });
});

// @route   POST /cart
// @desc    Create new cart
// @access  Private/Protected
export const addToCart = asyncHandler(async (req, res) => {
  const product = req.body.product;
  const quantity = parseInt(req.body.quantity);

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

    await cart.save();
    res.redirect('/');
  } else {
    await Cart.create({
      user: req.user._id,
      products: [{ product, quantity }],
    });

    res.redirect('/');
  }
});

// @route   PUT /cart
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

// @route   DELETE /cart
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
