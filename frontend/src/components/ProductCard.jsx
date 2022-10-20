import axios from 'axios';
import { useState, useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { UserContext } from '../context/userContext';

export default function ProductCard({ _id, name, price, image }) {
  const navigate = useNavigate();

  const { items, dispatch } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [isInCart, setIsInCart] = useState(false);

  const isProductInCart = (id) => {
    return items.some((item) => item._id === id);
  };

  const handleAddToCart = async () => {
    try {
      await axios.post(
        '/api/cart',
        {
          product: _id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        }
      );

      navigate('/cart');
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(_id));
  };

  return (
    <div className='block overflow-hidden rounded-md bg-lime-400'>
      <img
        crossOrigin='anonymous'
        src={`http://localhost:5000/${image}`}
        className='w-full h-[14.5rem] object-cover'
        alt=''
      />

      <div className='p-4 text-gray-900 grid grid-cols-1'>
        <span className='font-medium'>{name}</span>

        <div className='flex justify-between items-center'>
          <span className='font-light'>
            Price: <span className='text-red-800'>{price}</span>
          </span>

          {user && (
            <span className='text-slate-800 hover:text-red-900 cursor-pointer transition-all delay-100 ease-out p-1'>
              {isInCart ? (
                <span
                  onClick={handleRemoveFromCart}
                  className='bg-yellow-500 hover:bg-yellow-400 rounded-md p-3 font-light text-gray-900'
                >
                  Remove from Cart
                </span>
              ) : (
                <FaCartPlus size={24} onClick={handleAddToCart} />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
