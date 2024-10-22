import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { UserContext } from '../context/userContext';
import { CartContext } from '../context/cartContext';
import { logout } from '../context/actions/userActions';
// import { clearCart } from '../context/actions/cartActions';

export default function Navbar() {
  const { user, dispatch } = useContext(UserContext);
  const { cartItems, handleClearCart } = useContext(CartContext);

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
            <span className='cursor-pointer'>Products</span>
          </Link>

          <Link to='/faq'>
            <span className='cursor-pointer'>Faq</span>
          </Link>

          <NavLink to='/about'>
            <span className='cursor-pointer'>About</span>
          </NavLink>

          {user === null && (
            <Link to='/login'>
              <span className='cursor-pointer'>Login</span>
            </Link>
          )}

          {user === null && (
            <Link to='/register'>
              <span className='cursor-pointer'>Register</span>
            </Link>
          )}

          {user && (
            <span
              onClick={() => {
                handleClearCart();
                dispatch(logout());
              }}
              className='cursor-pointer font-medium'
            >
              Logout
            </span>
          )}
        </span>

        {user && (
          <span>
            <NavLink to='/cart'>
              <span className='cursor-pointer flex items-center justify-center space-x-1'>
                <span>
                  (<span className='font-bold mx-1'>{cartItems.length}</span>)
                </span>
                <FaShoppingCart />
              </span>
            </NavLink>
          </span>
        )}
      </div>
    </nav>
  );
}
