import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className='flex space-x-3'>
      <div
        className='w-8 h-8 rounded-3xl bg-lime-800 hover:bg-lime-700 flex items-center justify-center text-gray-100 cursor-pointer'
        onClick={decreaseQuantity}
      >
        <FaMinus />
      </div>

      <div className='w-8 h-8 rounded-md bg-white flex justify-center items-center'>
        <span className='font-light text-lg'>{quantity}</span>
      </div>

      <div
        className='w-8 h-8 rounded-3xl bg-lime-800 hover:bg-lime-700 flex items-center justify-center text-gray-100 cursor-pointer'
        onClick={increaseQuantity}
      >
        <FaPlus />
      </div>
    </div>
  );
}
