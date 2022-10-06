export default function AdminProductCard({ details }) {
  return (
    <div className='block overflow-hidden rounded-md bg-lime-400'>
      <img
        src='/pill.jpg'
        className='block w-full h-[13rem] object-cover'
        alt=''
      />
      <div className='p-4 text-gray-900 grid grid-cols-1'>
        <span className='font-medium'>Hydrocodone Pill</span>

        <span className='font-light'>
          Price: <span className='text-red-800'>$30</span>
        </span>

        <div className='flex justify-between items-center'>
          <span className='font-light'>
            Quantity: <span className='text-red-800'>20</span>
          </span>
          <span className='font-light underline cursor-pointer p-1'>Edit</span>
        </div>
      </div>
    </div>
  );
}
