import QRCode from 'qrcode';
import CoinGecko from 'coingecko-api';
import asyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';

const coinGeckoClient = new CoinGecko();

// @route   POST /pay
// @desc    Render payment page
// @access  Private/User
export const paymentPage = asyncHandler(async (req, res) => {
  const { order, amount, message } = req.body;

  const BTC_ADDRESS = process.env.BTC_ADDRESS;

  // COnvert BTC TO USD
  const btcAmount = await convertUSDToBTC(amount);

  // QRCodeData
  const qrCodeData = `bitcoin:${BTC_ADDRESS}?amount=${btcAmount}&message=${encodeURIComponent(
    message
  )}`;

  const options = {
    width: 250,
    height: 250,
  };

  QRCode.toDataURL(qrCodeData, options, async (err, qrCodeImg) => {
    const data = {
      order,
      address: BTC_ADDRESS,
      qrCodeImg,
      amount,
      btcAmount,
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

/* Helper Functions */
async function cartItems(req) {
  const cart = await Cart.findOne({ user: req.user._id })
    .populate('user', 'name email')
    .populate('products.product', 'name price countInStock minimumOrder')
    .exec();

  const cartItems = cart && cart.products.length > 0 ? cart.products : [];

  return cartItems;
}

async function convertUSDToBTC(amount) {
  const response = await coinGeckoClient.coins.fetch('bitcoin', {});
  const btcPrice = response.data.market_data.current_price.usd;
  const btcAmount = amount / btcPrice;
  return btcAmount;
}
