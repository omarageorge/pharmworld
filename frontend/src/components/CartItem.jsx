import { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

export default function CartItem({ product, quantity }) {
  const { name, image, price, minimumOrder = 1 } = product;
  const [qty, setQty] = useState(minimumOrder);
  const [subTotal, setSubTotal] = useState(price * qty);

  const updateSubTotal = () => {
    setSubTotal(price * qty);
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
    updateSubTotal();
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
          min='1'
          value={qty}
          onChange={handleQtyChange}
          className='mx-3 w-16 outline-none'
        />
      </td>
      <td className='w-1/6 h-auto text-center p-3'>${subTotal}</td>
      <td className='w-1/6 h-auto text-center p-3'>
        <div className='w-5 h-5 text-xl flex items-center justify-center ml-8'>
          <FaTimesCircle className='text-red-500 cursor-pointer' />
        </div>
      </td>
    </tr>
  );
}
