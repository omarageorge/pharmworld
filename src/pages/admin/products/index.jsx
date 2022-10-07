import AdminLayout from '../../../components/Admin/AdminLayout';
import AdminProductCard from '../../../components/Admin/AdminProduct';

export default function AdminProducts() {
  return (
    <AdminLayout>
      <div className='w-full h-auto grid grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-2 md:grid-cols-3'>
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
      </div>
    </AdminLayout>
  );
}
