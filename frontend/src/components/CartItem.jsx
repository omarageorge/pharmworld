import { useState, useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { CartContext } from '../context/cartContext';
import { removeFromCart } from '../context/actions/cartActions';

export default function CartItem({ product, qty }) {
  const { name, image, price, minimumOrder } = product;
  const { dispatch } = useContext(CartContext);

  const [quantity, setQuantity] = useState(qty);

  const handleQtyChange = (e) => {
    setQuantity(e.target.value);

    quantity < minimumOrder && setQuantity(minimumOrder);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <tr className='w-full h-auto'>
      <td className='w-1/6 h-auto text-left p-3'>
        <img
          crossOrigin='anonymous'
          src={`/images/${image}`}
          alt={name}
          className='w-10 h-10 object-cover rounded-sm'
        />
      </td>
      <td className='w-1/6 h-auto text-center p-3'>${price}</td>
      <td className='w-1/6 h-auto text-center p-3'>
        <input
          type='number'
          min={minimumOrder}
          value={quantity}
          onChange={handleQtyChange}
          className='mx-3 w-16 outline-none'
        />
      </td>
      <td className='w-1/6 h-auto text-center p-3'>${price * qty}</td>
      <td className='w-1/6 h-auto text-center p-3'>
        <div
          onClick={handleRemoveFromCart}
          className='w-5 h-5 text-xl flex items-center justify-center ml-8 cursor-pointer'
        >
          <FaTimesCircle className='text-red-500' />
        </div>
      </td>
    </tr>
  );
}
