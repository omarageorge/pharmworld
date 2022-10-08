import Image from 'next/image';
import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

export default function ProductCard({ product, price, image }) {
  const [added, setAdded] = useState(false);

  return (
    <div className='block overflow-hidden rounded-md bg-lime-400'>
      <Image
        src={image}
        width='100%'
        height='55rem'
        layout='responsive'
        objectFit='cover'
        alt=''
      />
      <div className='p-4 text-gray-900 grid grid-cols-1'>
        <span className='font-medium'>{product}</span>

        <div className='flex justify-between items-center'>
          <span className='font-light'>
            Price: <span className='text-red-800'>{price}</span>
          </span>

          <span
            className='text-slate-800 hover:text-red-900 cursor-pointer transition-all delay-100 ease-out p-1'
            onClick={() => {
              setAdded(!added);
            }}
          >
            {added ? (
              <span className='bg-yellow-500 hover:bg-yellow-400 rounded-md p-3 font-light text-gray-900'>
                Remove from Cart
              </span>
            ) : (
              <FaCartPlus size={24} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
