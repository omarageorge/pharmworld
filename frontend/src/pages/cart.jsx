import CartItem from '../components/CartItem';
import Layout from '../components/Layout';

export default function Cart() {
  const cart = [
    {
      id: 1,
      name: 'Percocet 10mg',
      price: 15,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Hydrocodone 10mg',
      price: 12,
      quantity: 1,
    },

    {
      id: 3,
      name: 'Oxycodone 15mg',
      price: 20,
      quantity: 1,
    },
  ];

  return (
    <Layout>
      <main className='py-6 px-8 flex flex-col lg:flex-row space-y-8 lg:space-x-8 lg:space-y-0 '>
        <div className='w-full lg:w-4/6 space-y-6'>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className='w-full lg:w-2/6 h-auto rounded-md mx-auto bg-lime-900 px-6 p-10 cursor-pointer'>
          <div className='mb-4 text-center'>
            <span className='font-medium text-gray-100 text-2xl'>
              Subtotal: <span className='text-red-400'>$56</span>
            </span>
          </div>

          <form className='space-y-6'>
            <div className='flex flex-col space-y-2'>
              <label className='font-light text-gray-100 text-md'>
                Enter email address
              </label>
              <input
                type='email'
                placeholder='email@dnmx.org   '
                className='w-full h-12 focus:outline focus:outline-lime-400 rounded-md p-4 bg-gray-100'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='font-light text-gray-100 text-md'>
                Your delivery address
              </label>
              <textarea
                type='text'
                placeholder='Address to deliver the package'
                className='w-full h-32 focus:outline focus:outline-lime-400 rounded-md p-4 bg-gray-100'
              ></textarea>
            </div>
            <button className='w-full h-12 rounded-md bg-yellow-500 hover:bg-yellow-400 mt-4 font-light text-gray-900 cursor-pointer'>
              Place order
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}
