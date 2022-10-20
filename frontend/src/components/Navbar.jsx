import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { UserContext } from '../context/userContext';
import { logout } from '../context/actions/userActions';

export default function Navbar() {
  const { user, dispatch } = useContext(UserContext);
  const [CartItems, setCartItems] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get('/api/cart', {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        });

        setCartItems(data.products.length);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchCartItems();
  }, []);

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
              onClick={() => dispatch(logout())}
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
                  (<span className='font-bold mx-1'>{CartItems}</span>)
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
