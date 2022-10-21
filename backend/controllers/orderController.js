import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';

// @route   GET /api/orders
// @desc    Get all orders
// @access  Private/Admin
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .populate('user', 'name email')
    .populate('orderItems.product', 'name price image');

  if (orders) {
    res.status(200).json(orders);
  } else {
    res.status(404);
    throw new Error('No orders found');
  }
});

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Private/Admin
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('user', 'name email')
    .populate('orderItems.product', 'name price image');

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @route   POST /api/orders
// @desc    Place new order
// @access  Private/Admin
export const placeOrder = asyncHandler(async (req, res) => {
  const { orderItems, deliveryAddress, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      totalPrice,
      deliveryAddress,
    });

    await order.save();

    // reduce quantity of products in stock by the quantity ordered by user in products collection
    await Promise.all(
      orderItems.map(async (item) => {
        const product = await Product.findById(item.product);
        product.countInStock -= item.quantity;
        await product.save();
      })
    );

    // clear cart after order is placed
    await Cart.findOneAndDelete({ user: req.user._id });

    res.status(201).json({ message: 'Order placed successfully' });
  }
});

// @route   PUT /api/orders/:id
// @desc    Update order to complete
// @access  Private/Admin
export const markOrderComplete = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isComplete = true;
    await order.save();

    res.status(201).json({ message: 'Order completed' });
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
