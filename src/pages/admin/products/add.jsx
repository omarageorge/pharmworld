import { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

import AdminLayout from '../../../components/Admin/AdminLayout';

export default function AdminAddProduct() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <AdminLayout>
      <div className='flex justify-center items-center'>
        <div className='w-10/12'>
          <span className='block font-light text-xl py-4'>Add new product</span>
          <form className='space-y-6'>
            <div className=''>
              <input
                placeholder='Product name'
                type='text'
                className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
              />
            </div>

            <div className=''>
              <input
                placeholder='Price'
                type='number'
                className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
              />
            </div>

            <div className=''>
              <input
                placeholder='Quantity'
                type='number'
                className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
              />
            </div>

            <div className=''>
              <input
                placeholder='Quantity'
                type='file'
                className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
              />
            </div>

            <div className=''>
              <textarea
                placeholder='Description'
                type='n'
                className='w-full h-40 border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
              ></textarea>
            </div>

            <div className=''>
              <button
                type='submit'
                className='w-full bg-lime-600 hover:bg-lime-500 py-3 rounded-sm text-white font-normal transition-all ease-out delay-300'
                disabled={loading && 'true'}
              >
                {loading ? <PulseLoader size={12} color='white' /> : 'SAVE'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
