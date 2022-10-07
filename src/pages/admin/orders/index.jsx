import AdminLayout from '../../../components/Admin/AdminLayout';
import TableRow from '../../../components/Admin/TableRow';

export default function AdminOrders() {
  const orders = [
    {
      order: 1,
      client: 'Philip',
      date: '4/11/22',
    },
    {
      order: 2,
      client: 'John',
      date: '3/11/22',
    },
    {
      order: 3,
      client: 'Jane',
      date: '2/11/22',
    },
    {
      order: 4,
      client: 'Bridget',
      date: '3/11/22',
    },
    {
      order: 5,
      client: 'Agnes',
      date: '1/11/22',
    },
  ];

  return (
    <AdminLayout>
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
                  key={index}
                  order={order.order}
                  client={order.client}
                  date={order.date}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
