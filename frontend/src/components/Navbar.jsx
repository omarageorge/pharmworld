import { Link, NavLink } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='fixed z-50 w-full bg-lime-700 py-5 shadow-sm'>
      <div className='w-[80%] mx-auto flex justify-between items-center text-gray-100'>
        <Link to='/'>
          <span className='font-bold text-gray-800 text-xl cursor-pointer'>
            Pharmworld
          </span>
        </Link>

        <span className='font-light space-x-6'>
          <Link to='/'>
            <span className='cursor-pointer'>Home</span>
          </Link>

          <NavLink to='/products'>
            <span className='cursor-pointer'>Products</span>
          </NavLink>

          <NavLink to='/faq'>
            <span className='cursor-pointer'>FAQ</span>
          </NavLink>

          <Link to='/login'>
            <span className='cursor-pointer'>Login</span>
          </Link>

          <Link to='/register'>
            <span className='cursor-pointer'>Register</span>
          </Link>
        </span>

        <span>
          <NavLink to='/cart'>
            <span className='cursor-pointer flex items-center justify-center space-x-1'>
              <span>(0)</span>
              <FaShoppingCart />
            </span>
          </NavLink>
        </span>
      </div>
    </nav>
  );
}
