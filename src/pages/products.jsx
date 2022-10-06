import AdminLayout from '../components/AdminLayout';
import Product from '../components/Product';

export default function Products() {
  return (
    <AdminLayout>
      <div className='w-full h-auto grid grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-2 md:grid-cols-3'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </AdminLayout>
  );
}
