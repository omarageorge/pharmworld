import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='fixed w-full bg-lime-700 py-5 shadow-2xl'>
      <div className='w-[80%] mx-auto flex justify-between items-center text-gray-100'>
        <Link to='/'>
          <span className='font-bold text-gray-800 text-xl'>Pharmworld</span>
        </Link>

        <span className='font-light space-x-6'>
          <NavLink to='/'>
            <span>Products</span>
          </NavLink>

          <NavLink to='/login'>
            <span>Login</span>
          </NavLink>

          <NavLink to='/register'>
            <span>Register</span>
          </NavLink>
        </span>

        <span>
          <NavLink to='/cart'>
            <span className='flex items-center'>
              <span>(0)</span>
              <FaShoppingCart />
            </span>
          </NavLink>
        </span>
      </div>
    </nav>
  );
}
