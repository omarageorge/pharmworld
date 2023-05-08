import asyncHandler from 'express-async-handler';
import QRCode from 'qrcode';
import { payments } from 'bitcoinjs-lib';
import Cart from '../models/cartModel.js';

export const paymentPage = asyncHandler(async (req, res) => {
  // TODO: Use req.params instead of req.query
  const { order, amount, message } = req.query;

  const BTC_ADDRESS = process.env.BTC_ADDRESS;

  // TODO: Convert USD to BTC before adding it to the address
  const qrCodeData = `bitcoin:${BTC_ADDRESS}?amount=${amount}&message=${encodeURIComponent(
    message
  )}`;

  const options = {
    width: 250,
    height: 250,
  };

  QRCode.toDataURL(qrCodeData, options, async (err, qrCodeImg) => {
    const data = {
      address: BTC_ADDRESS,
      qrCodeImg,
      amount,
      order,
    };

    const cart = await cartItems(req);

    res.render('pages/pay', {
      title: 'Pay',
      user: req.isAuthenticated() ? req.user : '',
      loggedIn: req.isAuthenticated(),
      items: cart,
      data,
    });
  });
});

async function cartItems(req) {
  const cart = await Cart.findOne({ user: req.user._id })
    .populate('user', 'name email')
    .populate('products.product', 'name price countInStock minimumOrder')
    .exec();

  const cartItems = cart && cart.products.length > 0 ? cart.products : [];

  return cartItems;
}

/* export const paymentPage = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id })
    .populate('user', 'name email')
    .populate('products.product', 'name price countInStock minimumOrder')
    .exec();

  const cartItems = cart && cart.products.length > 0 ? cart.products : [];



  const qrCodeUrl = await QRCode.toDataURL(paymentAddress, {
    width: 250,
    height: 250,
  });

  const data = {
    qrCodeUrl,
    paymentAddress,
    order: req.params.orderId,
  };

  res.render('pages/pay', {
    title: 'Pay',
    user: req.isAuthenticated() ? req.user : '',
    loggedIn: req.isAuthenticated(),
    items: cartItems,
    data,
  });
});
 */
