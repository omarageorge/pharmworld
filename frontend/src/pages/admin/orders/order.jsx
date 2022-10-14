import { useParams } from 'react-router-dom';
import { FaCheckSquare } from 'react-icons/fa';

export default function AdminOrder() {
  const params = useParams();

  return (
    <div className='w-11/12 sm:w-10/12 mx-auto '>
      <div className='flex sm:justify-end pt-8'>
        <table>
          <tbody>
            <tr>
              <td className='font-medium text-lg sm:text-right'>Order:</td>
              <td className='font-light text-lg pl-4'>{params.orderId}</td>
            </tr>
            <tr>
              <td className='font-medium text-lg sm:text-right'>Client:</td>
              <td className='font-light text-lg pl-4'>John Doe</td>
            </tr>
            <tr>
              <td className='font-medium text-lg sm:text-right'>Date:</td>
              <td className='font-light text-lg pl-4'>08/10/22</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='pt-8'>
        <span className='font-medium text-lg'>Orders</span>

        <table className='w-5/6 border mt-2 text-left'>
          <thead className='bg-lime-600 text-gray-100'>
            <tr>
              <th className='p-2 sm:p-4 text-center border-r-2'>#</th>
              <th className='p-2 sm:p-4 border-r-2'>Item</th>
              <th className='p-2 sm:p-4'>Quantity</th>
            </tr>
          </thead>
          <tbody className='font-light'>
            <tr>
              <td className='border p-2 sm:p-4 text-center'>1</td>
              <td className='border p-2 sm:p-4'>Some product</td>
              <td className='border p-2 sm:p-4 text-center'>2</td>
            </tr>

            <tr>
              <td className='border p-2 sm:p-4 text-center'>2</td>
              <td className='border p-2 sm:p-4'>Some other product</td>
              <td className='border p-2 sm:p-4 text-center'>2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='pt-8'>
        <span className='font-medium text-lg'>Delivery address</span>
        <address className='font-light text-lg'>Kampala, Uganda</address>
      </div>

      <button className='flex items-center mt-8 px-4 py-3 rounded-md shadow-md text-white font-normal bg-orange-600 hover:bg-lime-700 transition-all delay-150 ease-out'>
        <FaCheckSquare />
        <span className='ml-2'>Confirm Delivery</span>
      </button>
    </div>
  );
}
