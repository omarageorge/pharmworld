import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages';
import Login from './pages/login';
import Register from './pages/register';
import Order from './pages/admin/order';
import Orders from './pages/admin/orders';
import Products from './pages/admin/products';
import AddProduct from './pages/admin/add_product';
import Cart from './pages/cart';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='cart' index element={<Cart />} />
        <Route path='products' element={<Products />} />
        <Route path='products/add' index element={<AddProduct />} />
        <Route path='orders' index element={<Orders />} />
        <Route path='order' index element={<Order />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
