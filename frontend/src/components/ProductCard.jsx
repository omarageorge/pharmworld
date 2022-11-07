import { useState, useEffect, useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { UserContext } from '../context/userContext';
import { CartContext } from '../context/cartContext';
import { addToCart, deleteFromCart } from '../context/actions/cartActions';

export default function ProductCard({
  _id,
  name,
  price,
  image,
  minimumOrder,
  countInStock,
}) {
  const { user } = useContext(UserContext);
  const { cartItems, dispatch } = useContext(CartContext);

  const [isInCart, setIsInCart] = useState(false);

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

        <span className='font-light'>
          Left in stock:
          <span className='text-red-800 ml-1'>{countInStock}</span>
        </span>

        <span className='font-light mb-1'>
          Minimum order quantity:
          <span className='text-red-800 ml-1'>{minimumOrder}</span>
        </span>

        {countInStock > 0 ? (
          <div className='flex justify-between items-start mt-2'>
            <span className='font-light'>
              Price: <span className='text-red-800'>${price}</span>
            </span>

            {user && (
              <span className='text-slate-800 hover:text-red-900 cursor-pointer transition-all delay-100 ease-out p-1'>
                {isInCart ? (
                  <span
                    onClick={() => dispatch(deleteFromCart({ _id }))}
                    className='bg-yellow-500 hover:bg-yellow-400 rounded-md p-3 font-light text-gray-900'
                  >
                    Remove from Cart
                  </span>
                ) : (
                  <FaCartPlus
                    size={24}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          _id,
                          name,
                          price,
                          image,
                          minimumOrder,
                          countInStock,
                        })
                      )
                    }
                  />
                )}
              </span>
            )}
          </div>
        ) : (
          <div className='flex justify-between items-center mt-2'>
            <span className='font-light'>
              Price: <span className='text-red-800'>${price}</span>
            </span>
            <span className='font-medium bg-lime-800 text-white p-3 rounded-md'>
              SOLD OUT
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
