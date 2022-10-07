import { useRouter } from 'next/router';

export default function TableRow({ order, client, date }) {
  const router = useRouter();

  return (
    <tr
      className='odd:bg-lime-200 even:bg-white hover:bg-lime-300 font-light cursor-pointer transition-all delay-150 ease-out'
      onClick={() => router.push(`/orders/1`)}
    >
      <td className='p-4 text-center'>{order}</td>
      <td className='p-4'>{client}</td>
      <td className='p-4'>{date}</td>
    </tr>
  );
}
