import ProductQuantity from './ProductQuantity';

export default function CartItem({ name }) {
  return (
    <div className='w-full h-auto md:h-20 rounded-md mx-auto bg-lime-100 flex flex-col space-y-6  p-8 md:p-0 md:px-8 md:grid md:grid-cols-3 md:place-items-center md:space-y-0 md:justify-items-start'>
      <span className='font-normal text-xl md:font-light md:text-lg'>
        {name}
      </span>

      <span className='justify-self-center'>
        <ProductQuantity />
      </span>

      <button className='bg-yellow-500 hover:bg-yellow-400 rounded-md p-3 font-light text-gray-900 cursor-pointer justify-self-end'>
        Remove from Cart
      </button>
    </div>
  );
}
