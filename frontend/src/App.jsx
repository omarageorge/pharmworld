import { Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/Admin/ProtectRoute';
import Home from './pages';
import NotFound from './pages/404';
import Cart from './pages/cart';
import Login from './pages/login';
import Register from './pages/register';
import AdminProducts from './pages/admin/products';
import AdminLayout from './components/Admin/AdminLayout';
import AdminAddProduct from './pages/admin/products/add';
import AdminOrders from './pages/admin/orders';
import AdminEditProduct from './pages/admin/products/edit';
import AdminOrder from './pages/admin/orders/order';
import About from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />

      <Route
        path='cart'
        element={
          <ProtectRoute>
            <Cart />
          </ProtectRoute>
        }
      />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route
        path='admin'
        element={
          <ProtectRoute>
            <AdminLayout />
          </ProtectRoute>
        }
      >
        <Route index element={<AdminProducts />} />
        <Route path='products' element={<AdminProducts />} />
        <Route path='edit/:productId' element={<AdminEditProduct />} />
        <Route path='add' element={<AdminAddProduct />} />
        <Route path='orders/:orderId' element={<AdminOrder />} />
        <Route path='orders' element={<AdminOrders />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
