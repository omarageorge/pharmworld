import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';

export default function ProductCard({ details }) {
  return (
    <div className='block overflow-hidden rounded-md bg-lime-400'>
      {/* <img
        src='/pill.jpg'
        className='block w-full h-[13rem] object-cover'
        alt=''
      /> */}

      <Image
        src='/pill.jpg'
        width='100%'
        height='55rem'
        layout='responsive'
        objectFit='cover'
        alt=''
      />
      <div className='p-4 text-gray-900 grid grid-cols-1'>
        <span className='font-medium'>Hydrocodone Pill</span>

        <div className='flex justify-between items-center'>
          <span className='font-light'>
            Price: <span className='text-red-800'>$20</span>
          </span>

          <span className='text-slate-800 hover:text-red-900 cursor-pointer transition-all delay-100 ease-out p-1'>
            <FaCartPlus size={24} />
          </span>
        </div>
      </div>
    </div>
  );
}
