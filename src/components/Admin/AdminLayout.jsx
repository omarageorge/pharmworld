import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AdminLayout({ children }) {
  const router = useRouter();

  const logout = () => {
    router.push('/login');
  };

  return (
    <main className='w-full h-auto'>
      <aside className='fixed w-2/12 h-screen bg-lime-600'>
        <span className='block font-medium text-sm text-center text-gray-100 uppercase mt-4 cursor-pointer'>
          Pharmworld
        </span>

        <div className='mt-4'>
          <Link href='/admin/products'>
            <span
              className={`block w-full py-4 px-1 ${
                router.pathname === '/admin/products'
                  ? 'bg-lime-700'
                  : 'bg-lime-900'
              }  hover:bg-lime-700 font-light text-center text-sm text-gray-100 transition-all delay-100 ease-out sm:text-lg cursor-pointer`}
            >
              Products
            </span>
          </Link>

          <Link href='/admin/products/add'>
            <span
              className={`block w-full border-y border-lime-700 py-4 px-1 ${
                router.pathname === '/admin/products/add'
                  ? 'bg-lime-700'
                  : 'bg-lime-900'
              }  hover:bg-lime-700 font-light text-center text-sm text-gray-100 transition-all delay-100 ease-out sm:text-lg cursor-pointer`}
            >
              Add Products
            </span>
          </Link>

          <Link href='/admin/orders'>
            <span
              className={`block w-full border-b border-lime-700 py-4 px-1 ${
                router.pathname === '/admin/orders'
                  ? 'bg-lime-700'
                  : 'bg-lime-900'
              }  hover:bg-lime-700 font-light text-center text-sm text-gray-100 transition-all delay-100 ease- sm:text-lg cursor-pointer`}
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

      <section className='w-10/12 h-auto ml-[16.666667%]'>{children}</section>
    </main>
  );
}
