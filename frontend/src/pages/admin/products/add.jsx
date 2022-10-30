import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import useInput from '../../../hooks/useInput';

export default function AdminAddProduct() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [name, bindName] = useInput('');
  const [price, bindPrice] = useInput('');
  const [countInStock, bindCountInStock] = useInput('');
  const [description, bindDescription] = useInput('');
  const [limit, bindLimit] = useInput('');

  const [image, setImage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('countInStock', countInStock);
      formData.append('description', description);
      formData.append('purchaseLimit', limit);
      formData.append('image', image);

      await axios.post('/api/products', formData, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('user')).token
          }`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setLoading(false);
      navigate('/admin/products');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  return (
    <div className='flex justify-center items-center pb-10'>
      <div className='w-10/12'>
        <span className='block font-light text-xl py-4'>Add new product</span>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className=''>
            <input
              placeholder='Product name'
              type='text'
              {...bindName}
              className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            />
          </div>

          <div className=''>
            <input
              placeholder='Price in USD'
              type='number'
              min={0}
              {...bindPrice}
              className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            />
          </div>

          <div className=''>
            <input
              placeholder='In stock'
              type='number'
              min={0}
              {...bindCountInStock}
              className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            />
          </div>

          <div className=''>
            <input
              placeholder='Purchase limit per order'
              type='number'
              min={1}
              {...bindLimit}
              className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            />
          </div>

          <div className=''>
            <input
              type='file'
              onChange={handleImageChange}
              className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            />
          </div>

          <div className=''>
            <textarea
              placeholder='Description'
              {...bindDescription}
              className='w-full h-40 border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            ></textarea>
          </div>

          <div className=''>
            <button
              type='submit'
              className='w-full bg-lime-600 hover:bg-lime-500 py-3 rounded-sm text-white font-normal transition-all ease-out delay-300'
              disabled={loading && loading === true ? true : false}
            >
              {loading ? <PulseLoader size={12} color='white' /> : 'SAVE'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
