import { useNavigate } from 'react-router-dom';

export default function TableRow({ order, client, date }) {
  const navigate = useNavigate();

  if (order.isComplete) {
    return (
      <tr
        className='odd:bg-lime-200 even:bg-white hover:bg-lime-300 font-light cursor-pointer transition-all delay-150 ease-out'
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

  return (
    <tr
      className='odd:bg-gray-300 even:bg-white  font-light cursor-pointer'
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
