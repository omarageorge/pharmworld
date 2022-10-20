import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductQuantity from './ProductQuantity';

export default function CartItem({ product, quantity }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const { _id, name, price } = product;

  const setQuantity = async (quantity) => {
    try {
      await axios.put(
        `/api/cart`,
        {
          product: _id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error.response.data.message);
    }

    navigate(0);
  };

  const deleteFromCart = async () => {
    try {
      await axios.delete(
        `/api/cart`,
        { product: _id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(0);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('user')).token);
  }, []);

  return (
    <div className='w-full h-auto md:h-20 rounded-md mx-auto bg-lime-100 flex flex-col space-y-6  p-8 md:p-0 md:px-8 md:grid md:grid-cols-3 md:place-items-center md:space-y-0 md:justify-items-start'>
      <span className='font-normal text-xl md:font-light md:text-lg'>
        {name}
      </span>

      <span className='justify-self-center'>
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
      </span>

      <button
        onClick={deleteFromCart}
        className='bg-yellow-500 hover:bg-yellow-400 rounded-md p-3 font-light text-gray-900 cursor-pointer justify-self-end'
      >
        Remove from Cart
      </button>
    </div>
  );
}
