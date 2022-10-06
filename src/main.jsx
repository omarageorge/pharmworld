import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './pages/admin/products';
import Login from './pages/login';
import Register from './pages/register';
import AddProduct from './pages/admin/add_product';
import Orders from './pages/admin/orders';
import Order from './pages/admin/order';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='products' index element={<Products />} />
        <Route path='products/add' index element={<AddProduct />} />
        <Route path='orders' index element={<Orders />} />
        <Route path='order' index element={<Order />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
