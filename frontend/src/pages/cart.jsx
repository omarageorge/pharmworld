import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import PageLoading from '../components/PageLoading';
import CartItem from '../components/CartItem';
import useInput from '../hooks/useInput';

export default function Cart() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [deliveryAddress, bindDeliveryAddress] = useInput('');

  const handleSubmission = async (e) => {
    e.preventDefault();

    const itemList = items.map((item) => {
      return {
        product: item.product._id,
        quantity: item.quantity,
      };
    });

    const payload = {
      orderItems: itemList,
      totalPrice: total,
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

      navigate('/');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const getProductsInCart = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get('/api/cart', {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        });

        setItems(data.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.response.data.message);
      }
    };

    getProductsInCart();
  }, []);

  useEffect(() => {
    const getTotal = () => {
      let total = 0;

      items.forEach((item) => {
        total += item.product.price * item.quantity;
      });

      setTotal(total);
    };

    getTotal();
  }, [items]);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <Layout>
      <main className='w-[80%] m-auto flex flex-col md:flex-row gap-x-4 space-y-6 md:space-y-0 '>
        {/* Col 1 */}
        <div className='flex-auto md:w-64'>
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
                <th className='w-1/6 h-auto text-center font-medium text-lg p-3'>
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className='w-full h-auto bg-gray-100 font-light text-gray-900'>
              {items.map((item) => (
                <CartItem key={item.product._id} {...item} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Col 2 */}
        <div className='flex-auto md:w-24'>
          <div className='w-full h-auto rounded-sm bg-lime-900 px-5 pt-4 pb-10 '>
            <div className='mb-4 text-center'>
              <span className='font-medium text-gray-100 text-2xl'>
                Total: <span className='text-red-400'>${total}</span>
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
              <button className='w-full h-12 rounded-md bg-yellow-500 hover:bg-yellow-400 mt-4 font-light text-gray-900 cursor-pointer'>
                Place order
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
