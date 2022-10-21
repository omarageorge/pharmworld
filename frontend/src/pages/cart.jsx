import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import PageLoading from '../components/PageLoading';
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
      <main className='py-6 px-8 flex flex-col lg:flex-row space-y-8 lg:space-x-8 lg:space-y-0 '>
        <div className='w-full lg:w-4/6 space-y-6'>
          {items.map((item) => (
            <CartItem key={item.product._id} {...item} />
          ))}
        </div>

        <div className='w-full lg:w-2/6 h-auto rounded-md mx-auto bg-lime-900 px-6 p-10 cursor-pointer'>
          <div className='mb-4 text-center'>
            <span className='font-medium text-gray-100 text-2xl'>
              Total: <span className='text-red-400'>${total}</span>
            </span>
          </div>

          <form onSubmit={handleSubmission} className='space-y-6'>
            {/*    <div className='flex flex-col space-y-2'>
              <label className='font-light text-gray-100 text-md'>
                Enter email address
              </label>
              <input
                type='email'
                {...bindEmail}
                placeholder='email@dnmx.org   '
                className='w-full h-12 focus:outline focus:outline-lime-400 rounded-md p-4 bg-gray-100'
              />
            </div> */}

            <div className='flex flex-col space-y-2'>
              <label className='font-light text-gray-100 text-md'>
                Your delivery address
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
      </main>
    </Layout>
  );
}
