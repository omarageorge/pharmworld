import { useNavigate } from 'react-router-dom';

export default function TableRowCompleted({ order, client, date }) {
  const navigate = useNavigate();

  return (
    <tr
      className='bg-gray-300 hover:bg-gray-400 font-light cursor-pointer transition-all delay-150 ease-out'
      onClick={() => {
        navigate(`/admin/orders/${order}`);
      }}
    >
      <td className='p-4 text-center'>{order}</td>
      <td className='p-4'>{client}</td>
      <td className='p-4'>{new Date(date).toDateString()}</td>
    </tr>
  );
}
