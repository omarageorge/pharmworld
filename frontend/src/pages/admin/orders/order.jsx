import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCheckSquare, FaCheck } from 'react-icons/fa';
import PageLoading from '../../../components/PageLoading';

export default function AdminOrder() {
  const params = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  const date = new Date(order.createdAt);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get(`/api/orders/${params.orderId}`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        });
        setOrder(data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchOrder();
  }, [params.id]);

  const markAsCompleted = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${order._id}`,
        {
          isComplete: true,
        },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        }
      );
      navigate('/admin/orders');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (order._id) {
      setLoading(false);
    }
  }, [order]);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className='w-11/12 sm:w-10/12 mx-auto pb-10 '>
      <div className='flex sm:justify-end pt-8'>
        <table>
          <tbody>
            <tr>
              <td className='font-medium text-lg sm:text-right'>Date:</td>
              <td className='font-light text-lg pl-4'>{date.toDateString()}</td>
            </tr>
            <tr>
              <td className='font-medium text-lg sm:text-right'>Order:</td>
              <td className='font-light text-lg pl-4'>{order._id}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='mt-12'>
        <table>
          <tbody>
            <tr>
              <td className='font-medium text-md sm:text-left'>Name:</td>
              <td className='font-light text-md pl-4'>{order.user.name}</td>
            </tr>
            <tr>
              <td className='font-medium text-md sm:text-left'>Email:</td>
              <td className='font-light text-md pl-4'>{order.user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='pt-6'>
        <span className='font-medium text-lg'>Orders</span>

        <table className='w-full border mt-2 text-left'>
          <thead className='bg-lime-600 text-gray-100'>
            <tr>
              <th className='p-2 sm:p-4 text-center border-r-2'>#</th>
              <th className='p-2 sm:p-4 border-r-2'>Item</th>
              <th className='p-2 sm:p-4 border-r-2 text-center'>Price</th>
              <th className='p-2 sm:p-4 text-center'>Quantity</th>
            </tr>
          </thead>
          <tbody className='font-light'>
            {order.orderItems.map((item, index) => (
              <tr key={index}>
                <td className='border p-2 sm:p-4 text-center'>{index + 1}</td>
                <td className='border p-2 sm:p-4'>{item.product.name}</td>
                <td className='border p-2 sm:p-4 text-center'>
                  {item.product.price}
                </td>
                <td className='border p-2 sm:p-4 text-center'>
                  {item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-6'>
        <span className='font-bold text-lg text-lime-600'>Total Price:</span>
        <span className='ml-4 font-bold text-lg text-orange-600'>
          ${order.totalPrice}
        </span>
      </div>

      <div className='pt-8'>
        <span className='font-medium text-lg'>Delivery address</span>
        <address className='font-light text-lg'>
          {order.deliveryAddress}
        </address>
      </div>

      <div className=' mt-8'>
        {order.isComplete ? (
          <button
            disabled
            className='flex items-center space-x-2 px-4 py-3 bg-lime-300 rounded-md shadow-md text-slate-900 font-normal'
          >
            <span>
              <FaCheck />
            </span>
            <span>Order Complete</span>
          </button>
        ) : (
          <button
            onClick={markAsCompleted}
            className='flex items-center px-4 py-3 rounded-md shadow-md text-white font-normal bg-orange-600 hover:bg-lime-700 transition-all delay-150 ease-out'
          >
            <FaCheckSquare />
            <span className='ml-2'>Mark as Complete</span>
          </button>
        )}
      </div>
    </div>
  );
}
