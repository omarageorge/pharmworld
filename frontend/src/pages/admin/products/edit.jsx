import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import PageLoading from '../../../components/PageLoading';
import useInput from '../../../hooks/useInput';

export default function AdminEditProduct() {
  const params = useParams();
  const navigate = useNavigate();

  const [pageLoading, setPageLoading] = useState(false);
  const [saveChangesLoading, setSaveChangesLoading] = useState(false);
  const [deleteProductLoading, setDeleteProductLoading] = useState(false);

  const [name, bindName, resetName] = useInput('');
  const [price, bindPrice, resetPrice] = useInput('');
  const [quantity, bindQuantity, resetQuantity] = useInput('');
  const [image, bindImage, resetImage] = useInput('');
  const [description, bindDescription, resetDescription] = useInput('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteProduct = async () => {
    try {
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        // setPageLoading(true);

        const res = await axios.post(
          `https://fakestoreapi.com/products/${params.productId}`
        );

        resetName(res.title);
        resetPrice(res.price);
        resetQuantity(res.quantity);
        resetImage(res.image);
        resetDescription(res.description);

        // setPageLoading(false);
      } catch (error) {
        setPageLoading(false);
      }
    };

    getProduct();
  }, [
    params.productId,
    resetName,
    resetPrice,
    resetQuantity,
    resetImage,
    resetDescription,
  ]);

  if (pageLoading) {
    return <PageLoading />;
  } else {
    return (
      <div className='flex justify-center items-center'>
        <div className='w-10/12'>
          <span className='block font-light text-xl py-4'>Update product</span>
          <form className='space-y-6 mb-6'>
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
                placeholder='Price'
                type='number'
                {...bindPrice}
                className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
              />
            </div>

            <div className=''>
              <input
                placeholder='Quantity'
                type='number'
                {...bindQuantity}
                className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
              />
            </div>

            <div className=''>
              <input
                placeholder='Quantity'
                type='file'
                {...bindImage}
                className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
              />
            </div>

            <div className=''>
              <textarea
                placeholder='Description'
                type='n'
                className='w-full h-40 border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2 font-light text-md'
              ></textarea>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <button
                type='submit'
                className='w-full bg-lime-600 hover:bg-lime-500 py-3 rounded-sm text-white font-normal transition-all ease-out delay-300'
                disabled={saveChangesLoading && 'true'}
              >
                {saveChangesLoading ? (
                  <PulseLoader size={12} color='white' />
                ) : (
                  'SAVE CHANGES'
                )}
              </button>

              <span
                className='block text-center w-full bg-red-600 hover:bg-red-500 py-3 rounded-sm text-white font-normal transition-all ease-out delay-300 cursor-pointer'
                disabled={deleteProductLoading && 'true'}
              >
                {deleteProductLoading ? (
                  <PulseLoader size={12} color='white' />
                ) : (
                  'DELETE PRODUCT'
                )}
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
