import { Link, useNavigate } from 'react-router-dom';

export default function AdminLayout({ children }) {
  let navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  };

  return (
    <main className='w-full h-auto'>
      <aside className='fixed w-2/12 h-screen bg-lime-600'>
        <span className='block font-medium text-lg text-center text-gray-100 uppercase mt-4'>
          Pharm world
        </span>

        <div className='mt-4'>
          <Link to='/products'>
            <a className='block w-full py-4 bg-lime-900 hover:bg-lime-800 font-light text-center text-lg text-gray-100 transition-all delay-100 ease-out'>
              Products
            </a>
          </Link>

          <Link to='/products/add'>
            <a className='block w-full border-y border-lime-700 py-4 bg-lime-900 hover:bg-lime-800 font-light text-center text-lg text-gray-100 transition-all delay-100 ease-out'>
              Add Products
            </a>
          </Link>

          <Link to='#'>
            <a className='block w-full border-b border-lime-700 py-4 bg-lime-900 hover:bg-lime-800 font-light text-center text-lg text-gray-100 transition-all delay-100 ease-out'>
              Orders
            </a>
          </Link>

          <a
            onClick={logout}
            className='block w-full py-4 bg-red-900 hover:bg-red-800 font-light text-center text-lg text-gray-100 transition-all delay-100 ease-out cursor-pointer'
          >
            Logout
          </a>
        </div>
      </aside>

      <section className='w-10/12 h-auto ml-[16.666667%]'>{children}</section>
    </main>
  );
}
