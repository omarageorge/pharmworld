import Link from 'next/link';
import Image from 'next/image';

export default function AdminProductCard({ details }) {
  return (
    <div className='block overflow-hidden rounded-md bg-lime-400'>
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

        <span className='font-light'>
          Price: <span className='text-red-800'>$30</span>
        </span>

        <div className='flex justify-between items-center'>
          <span className='font-light'>
            Remaining: <span className='text-red-800'>20</span>
          </span>

          <Link href={`/admin/products/1`}>
            <span className='font-light underline cursor-pointer p-1'>
              Edit
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
