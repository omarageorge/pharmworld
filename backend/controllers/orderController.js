import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @route   GET /api/orders
// @desc    Get all orders
// @access  Private/Admin
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .populate('user', 'name email')
    .populate('orderItems.product', 'name price image');

  if (orders) {
    res.json(orders);
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
    res.json(order);
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

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @route   PUT /api/orders/:id
// @desc    Update order to complete
// @access  Private/Admin
export const markOrderComplete = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isComplete = true;

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
