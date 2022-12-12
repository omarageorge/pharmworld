import asyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';

const cart = asyncHandler(async (req, res, next) => {
  if (req.isAuthenticated()) {
    const cart = await Cart.findOne({ user: req.user._id })
      .populate('user', 'name email')
      .populate('products.product', 'name price countInStock minimumOrder')
      .exec();

    req.cart = cart && cart.products.length > 0 ? cart.products : [];

    next();
  }

  next();
});

export default cart;
