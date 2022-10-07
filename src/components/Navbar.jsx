import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='fixed z-50 w-full bg-lime-700 py-5 shadow-2xl'>
      <div className='w-[80%] mx-auto flex justify-between items-center text-gray-100'>
        <Link href='/'>
          <span className='font-bold text-gray-800 text-xl cursor-pointer'>
            Pharmworld
          </span>
        </Link>

        <span className='font-light space-x-6'>
          <Link href='/'>
            <span className='cursor-pointer'>Products</span>
          </Link>

          <Link href='/login'>
            <span className='cursor-pointer'>Login</span>
          </Link>

          <Link href='/register'>
            <span className='cursor-pointer'>Register</span>
          </Link>
        </span>

        <span>
          <Link href='/cart'>
            <span className='flex items-center'>
              <span>(0)</span>
              <FaShoppingCart />
            </span>
          </Link>
        </span>
      </div>
    </nav>
  );
}
