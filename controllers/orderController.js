import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';

// @route   GET /orders
// @desc    Render page with all orders
// @access  Private/Admin
export const ordersPage = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .sort({ createdAt: -1 })
    .populate('user', 'name email')
    .populate('orderItems.product', 'name price image');

  res.render('admin/orders', { title: 'Orders', user: req.user, orders });
});

// @route   GET /orders/:id
// @desc    Render order page by ID
// @access  Private/Admin
export const orderPage = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('user', 'name email')
    .populate('orderItems.product', 'name price image');

  res.render('admin/order', { title: 'Order', user: req.user, order });
});

// @route   POST /orders
// @desc    Place new order
// @access  Private/Admin
export const placeOrder = asyncHandler(async (req, res) => {
  const totalPrice = parseInt(req.body.totalPrice);

  const { products } = await Cart.findOne({ user: req.user._id })
    .populate('user', 'name email')
    .populate('products.product', '_id name price countInStock minimumOrder')
    .exec();

  const orderItems = products.map((item) => ({
    product: item.product._id,
    quantity: item.quantity,
  }));

  const deliveryAddress = {
    name: req.body.name,
    street: req.body.street,
    zipcode: req.body.zipcode,
    city: req.body.city,
    state: req.body.state,
    additional: req.body.additional,
  };

  if (orderItems && orderItems.length === 0) {
    res.redirect('/');
  } else {
    const order = new Order({
      user: req.user._id,
      totalPrice,
      orderItems,
      deliveryAddress,
    });

    await order.save();

    // reduce quantity of products in stock by the quantity ordered by user in products collection
    await Promise.all(
      orderItems.map(async (item) => {
        const product = await Product.findById(item.product._id);
        product.countInStock -= item.quantity;
        await product.save();
      })
    );

    // clear cart after order is placed
    await Cart.findOneAndDelete({ user: req.user._id });

    res.redirect('/');
  }
});

// @route   PUT /orders/:id
// @desc    Update order to complete
// @access  Private/Admin
export const markOrderComplete = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isComplete = true;
    await order.save();

    res.redirect(`/admin/order/${req.params.id}`);
  } else {
    res.redirect('/admin');
  }
});
