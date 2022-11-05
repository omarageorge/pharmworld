import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import Layout from '../components/Layout';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/cartContext';
import { clearCart } from '../context/actions/cartActions';
import useInput from '../hooks/useInput';

export default function Cart() {
  const navigate = useNavigate();

  const { cartItems, dispatch } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const [deliveryAddress, bindDeliveryAddress] = useInput('');

  const handleSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    const itemList = cartItems.map((item) => {
      return {
        product: item._id,
        quantity: item.qty,
      };
    });

    const payload = {
      orderItems: itemList,
      totalPrice: itemsPrice,
      deliveryAddress,
    };

    try {
      await axios.post('/api/orders', payload, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('user')).token
          }`,
        },
      });

      dispatch(clearCart());
      setLoading(false);
      navigate('/');
    } catch (error) {}
  };

  return (
    <Layout>
      <main className='w-[80%] m-auto flex flex-col md:flex-row gap-x-4 space-y-6 md:space-y-0 '>
        {/* Col 1 */}
        <div className='flex-auto md:w-64'>
          {cartItems.length === 0 ? (
            <div className='flex flex-col items-center justify-center space-y-4'>
              <span className='text-2xl font-bold'>Your cart is empty</span>
              <button
                onClick={() => navigate('/')}
                className='px-4 py-2 bg-lime-700 text-gray-100 rounded-md'
              >
                Shop Now
              </button>
            </div>
          ) : (
            <table className='w-full h-auto text-gray-200 border-collapse border'>
              <thead className='w-full h-auto bg-lime-900'>
                <tr className='w-full h-auto'>
                  <th className='w-1/4 h-auto  text-left font-medium text-lg p-3'>
                    Product
                  </th>
                  <th className='w-1/6 h-auto text-center font-medium text-lg p-3'>
                    Price
                  </th>
                  <th className='w-1/6 h-auto text-center font-medium text-lg p-3'>
                    Qty
                  </th>
                  <th className='w-1/6 h-auto text-center font-medium text-lg p-3'>
                    Subtotal
                  </th>
                </tr>
              </thead>

              <tbody className='w-full h-auto bg-gray-100 font-light text-gray-900'>
                {cartItems.map((item) => (
                  <CartItem key={item._id} {...item} />
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Col 2 */}
        <div className='flex-auto md:w-24'>
          <div className='w-full h-auto rounded-sm bg-lime-900 px-5 pt-4 pb-10 '>
            <div className='mb-4 text-center'>
              <span className='font-medium text-gray-100 text-2xl'>
                Total: <span className='text-red-400'>${itemsPrice}</span>
              </span>
            </div>

            <form onSubmit={handleSubmission} className='space-y-6'>
              <div className='flex flex-col space-y-2'>
                <label className='font-light text-gray-100 text-md'>
                  Your delivery address (Street Name, Street No, Customer Name,
                  ZIP Code)
                </label>
                <textarea
                  type='text'
                  {...bindDeliveryAddress}
                  placeholder='Address to deliver the package'
                  className='w-full h-32 focus:outline focus:outline-lime-400 rounded-md p-4 bg-gray-100'
                ></textarea>
              </div>
              <button
                disabled={loading && loading === true ? true : false}
                className='w-full h-12 rounded-md bg-yellow-500 hover:bg-yellow-400 mt-4 font-light text-gray-900 '
              >
                {loading && loading === true ? (
                  <PulseLoader size={12} color='rgb(17,24,39,90%)' />
                ) : (
                  'Place order'
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
