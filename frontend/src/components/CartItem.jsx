import { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CartContext } from '../context/cartContext';
import { addToCart, removeFromCart } from '../context/actions/cartActions';

export default function CartItem({ _id, name, price, image, qty }) {
  const { dispatch } = useContext(CartContext);

  return (
    <tr className='w-full h-auto'>
      <td className='w-1/6 h-auto text-left p-3'>
        <div className='flex items-center space-x-2'>
          <img
            crossOrigin='anonymous'
            src={`/images/${image}`}
            alt={name}
            className='block w-10 h-10 object-cover rounded-sm'
          />
          <span>{name}</span>
        </div>
      </td>
      <td className='w-1/6 h-auto text-center p-3'>${price}</td>
      <td className='w-1/6 h-auto text-center p-3'>
        <div className='flex space-x-3'>
          <div
            className='w-8 h-8 rounded-3xl bg-lime-800 hover:bg-lime-700 flex items-center justify-center text-gray-100 cursor-pointer'
            onClick={() => dispatch(removeFromCart({ _id }))}
          >
            <FaMinus />
          </div>

          <div className='min-w-8 h-8 px-3 rounded-md bg-white flex justify-center items-center'>
            <span className='font-light text-lg'>{qty}</span>
          </div>
          <div
            className='w-8 h-8 rounded-3xl bg-lime-800 hover:bg-lime-700 flex items-center justify-center text-gray-100 cursor-pointer'
            onClick={() => dispatch(addToCart({ _id, name, price, image }))}
          >
            <FaPlus />
          </div>
        </div>
      </td>
      <td className='w-1/6 h-auto text-center p-3'>${price * qty}</td>
    </tr>
  );
}
