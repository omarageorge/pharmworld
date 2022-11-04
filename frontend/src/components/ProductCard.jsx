import { useState, useEffect, useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { UserContext } from '../context/userContext';
import { CartContext } from '../context/cartContext';

export default function ProductCard({ _id, name, price, image, minimumOrder }) {
  const { user } = useContext(UserContext);
  const { cartItems, onAdd, onRemove } = useContext(CartContext);

  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    onAdd({ _id, name, price, image, minimumOrder });
  };

  const handleRemoveFromCart = () => {
    onRemove({ _id, name, price, image, minimumOrder });
  };

  useEffect(() => {
    const isProductInCart = cartItems.find((item) => item._id === _id);

    if (isProductInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartItems, _id]);

  return (
    <div className='block overflow-hidden rounded-md bg-lime-400'>
      <img
        crossOrigin='anonymous'
        src={`/images/${image}`}
        className='w-full h-[14.5rem] object-cover'
        alt=''
      />

      <div className='p-4 text-gray-900 grid grid-cols-1'>
        <span className='font-medium'>{name}</span>

        <div className='flex justify-between items-start mt-2'>
          <span className='font-light'>
            Price: <span className='text-red-800'>${price}</span>
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
