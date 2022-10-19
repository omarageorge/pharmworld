import { useState, useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../context/cartContext';
import { UserContext } from '../context/userContext';
import { addToCart, removeFromCart } from '../context/actions/cartActions';

export default function ProductCard({ _id, name, price, image }) {
  const { items, dispatch } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [isInCart, setIsInCart] = useState(false);

  const isProductInCart = (id) => {
    return items.some((item) => item._id === id);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ _id, name, price }));
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
