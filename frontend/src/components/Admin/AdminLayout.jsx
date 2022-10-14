import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../context/userContext';

export default function AdminLayout() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const logout = () => {
    navigate('/login');
  };

  return (
    <main className='w-full h-auto'>
      <aside className='fixed w-2/12 h-screen bg-lime-600'>
        <span className='block font-medium text-sm text-center text-gray-100 uppercase mt-4 cursor-pointer'>
          Pharmworld
        </span>

        <div className='mt-4'>
          <Link to='/admin/products'>
            <span
              className={`block w-full py-4 px-1 bg-lime-900 hover:bg-lime-700 font-light text-center text-sm text-gray-100 transition-all delay-100 ease-out sm:text-lg cursor-pointer`}
            >
              Products
            </span>
          </Link>

          <Link to='/admin/add'>
            <span
              className={`block w-full border-y border-lime-700 py-4 px-1 bg-lime-900 hover:bg-lime-700 font-light text-center text-sm text-gray-100 transition-all delay-100 ease-out sm:text-lg cursor-pointer`}
            >
              Add Products
            </span>
          </Link>

          <Link to='/admin/orders'>
            <span
              className={`block w-full border-b border-lime-700 py-4 px-1 bg-lime-900 hover:bg-lime-700 font-light text-center text-sm text-gray-100 transition-all delay-100 ease- sm:text-lg cursor-pointer`}
            >
              Orders
            </span>
          </Link>

          <span
            onClick={logout}
            className='block w-full py-4 px-1 bg-red-900 hover:bg-red-800 font-light text-center text-sm text-gray-100 transition-all delay-100 ease-out cursor-pointer sm:text-lg'
          >
            Logout
          </span>
        </div>
      </aside>

      <section className='w-10/12 h-auto ml-[16.666667%]'>
        <Outlet />
      </section>
    </main>
  );
}
