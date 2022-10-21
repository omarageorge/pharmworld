import axios from 'axios';
import { useEffect, useState } from 'react';
import TableRow from '../../../components/Admin/TableRow';
import TableRowCompleted from '../../../components/Admin/TableRowCompleted';
import PageLoading from '../../../components/PageLoading';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('/api/orders', {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        });
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      {orders.length == 0 && (
        <span className='block font-light text-xl pt-8 text-center text-red-600 mb-6'>
          No orders have been made.
        </span>
      )}

      {orders.length > 0 && (
        <div className='px-4'>
          <span className='block font-light text-xl py-4'>
            Orders # {orders.length}
          </span>

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
                {orders.map((order) => {
                  if (order.isComplete === true) {
                    return (
                      <TableRowCompleted
                        key={order._id}
                        order={order._id}
                        client={order.user.name}
                        date={order.createdAt}
                      />
                    );
                  }
                  return (
                    <TableRow
                      key={order._id}
                      order={order._id}
                      client={order.user.name}
                      date={order.createdAt}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
