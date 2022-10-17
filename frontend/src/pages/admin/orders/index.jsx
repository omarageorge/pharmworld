import axios from 'axios';
import { useEffect, useState } from 'react';
import TableRow from '../../../components/Admin/TableRow';
import PageLoading from '../../../components/PageLoading';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/orders', {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        });
        setOrders(data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      setLoading(false);
    }
  }, [orders]);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className='px-4'>
      <span className='block font-light text-xl py-4'>Orders</span>

      <div className=''>
        <table className='w-full table-auto text-left'>
          <thead className='bg-lime-600 text-gray-100'>
            <tr>
              <th className='w-1/12 p-4 text-center border-r-2'>#</th>
              <th className='w-8/12 p-4 border-r-2'>Client</th>
              <th className='w-3/12 p-4'>Date</th>
            </tr>
          </thead>

          <tbody className=''>
            {orders.map((order, index) => (
              <TableRow
                key={order._id}
                order={order._id}
                client={order.user.name}
                date={order.createdAt}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
