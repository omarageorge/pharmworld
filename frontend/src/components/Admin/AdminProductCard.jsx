import { useNavigate } from 'react-router-dom';

export default function AdminProductCard({
  _id,
  image,
  name,
  price,
  countInStock,
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`block overflow-hidden rounded-md ${
        countInStock <= 0 ? 'bg-gray-300' : 'bg-lime-400'
      }`}
    >
      <img
        crossOrigin='anonymous'
        src={`/images/${image}`}
        className={`w-full h-[13rem] object-cover ${
          countInStock <= 0 && 'grayscale'
        }`}
        alt=''
      />

      <div className='p-4 text-gray-900 grid grid-cols-1'>
        <span className='font-medium'>{name}</span>

        <span className='font-light'>
          Price: <span className='text-red-800'>{price}</span>
        </span>

        <div className='flex justify-between items-center'>
          <span className='font-light'>
            Remaining: <span className='text-red-800'>{countInStock}</span>
          </span>

          <span
            className='font-light underline cursor-pointer p-1'
            onClick={() => {
              navigate(`/admin/edit/${_id}`);
            }}
          >
            Edit
          </span>
        </div>
      </div>
    </div>
  );
}
