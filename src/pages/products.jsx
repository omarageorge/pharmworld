import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import Product from '../components/Product';

export default function Products() {
  return (
    <AdminLayout>
      {/* <div className='text-right pt-8 pr-4'>
          <Link to='#'>
            <a className='bg-lime-900 hover:bg-lime-800 py-4 px-8 rounded-sm font-light text-lg text-gray-100 first-letter transition-all delay-100 ease-out'>
              Add New
            </a>
          </Link>
        </div> */}

      <div className='w-full h-auto grid grid-cols-3 gap-6 px-6 py-6 '>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </AdminLayout>
  );
}
