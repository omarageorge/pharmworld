import { FaCartPlus } from 'react-icons/fa';

export default function Product() {
  return (
    <div className='block overflow-hidden rounded-md bg-lime-400'>
      <img
        src='/pill.jpg'
        className='block w-full h-[13rem] object-cover'
        alt=''
      />
      <div className='p-4 text-gray-900 grid grid-cols-1'>
        <span className='font-medium'>Hydrocodone Pill</span>

        <div className='flex justify-between items-center'>
          <span className='font-light'>
            Quantity: <span className='text-red-800'>20</span>
          </span>

          <span className='text-slate-800 hover:text-lime-900 cursor-pointer'>
            <FaCartPlus size={24} />
          </span>
        </div>
      </div>
    </div>
  );
}
