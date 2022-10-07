import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages';
import Cart from './pages/cart';
import Login from './pages/login';
import Register from './pages/register';
import AdminOrder from './pages/admin/order';
import AdminOrders from './pages/admin/orders';
import AdminProducts from './pages/admin/products';
import AdminAddProduct from './pages/admin/add_product';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='cart' element={<Cart />} />
        <Route path='admin' element={<AdminProducts />}>
          <Route path='add' element={<AdminAddProduct />} />
          <Route path='orders' element={<AdminOrders />}>
            <Route path=':orderId' element={<AdminOrder />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
