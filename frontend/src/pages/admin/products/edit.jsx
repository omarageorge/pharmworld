import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import { FaCamera } from 'react-icons/fa';
import PageLoading from '../../../components/PageLoading';

export default function AdminEditProduct() {
  const params = useParams();
  const navigate = useNavigate();

  const [pageLoading, setPageLoading] = useState(false);
  const [saveChangesLoading, setSaveChangesLoading] = useState(false);
  const [deleteProductLoading, setDeleteProductLoading] = useState(false);

  const [productData, setProductData] = useState({
    name: '',
    price: '',
    countInStock: '',
    purchaseLimit: '',
    description: '',
  });

  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaveChangesLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('price', productData.price);
      formData.append('countInStock', productData.countInStock);
      formData.append('purchaseLimit', productData.purchaseLimit);
      formData.append('description', productData.description);
      formData.append('image', image);

      await axios.put(`/api/products/${params.productId}`, formData, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('user')).token
          }`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setSaveChangesLoading(false);
      navigate('/admin/products');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const deleteProduct = async () => {
    try {
      setDeleteProductLoading(true);
      await axios.delete(`/api/products/${params.productId}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('user')).token
          }`,
        },
      });
      setDeleteProductLoading(false);
      navigate('/admin/products');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setPageLoading(true);
      try {
        const { data } = await axios.get(`/api/products/${params.productId}`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        });

        setProductData({
          name: data.name,
          price: data.price,
          image: data.image,
          countInStock: data.countInStock,
          purchaseLimit: data.purchaseLimit,
          description: data.description,
        });

        setImagePreview(`http://localhost:5000/${data.image}`);
        setPageLoading(false);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    getProduct();
  }, [params.productId]);

  if (pageLoading) {
    return <PageLoading />;
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-10/12'>
        <span className='block font-light text-xl py-4'>Update product</span>
        <form onSubmit={handleSubmit} className='space-y-6 mb-6'>
          <div>
            {imagePreview && (
              <label>
                <div className='w-[25rem] h-[15rem] relative z-[1] rounded-lg shadow-lg overflow-hidden cursor-pointer'>
                  <img
                    crossOrigin='anonymous'
                    src={imagePreview}
                    alt='product'
                    className='w-full h-full absolute z-[2] object-cover'
                  />
                  <div className='w-full h-full absolute z-[3] bg-black opacity-30'></div>
                  <div className='w-full h-full absolute z-[4] flex items-center justify-center'>
                    <FaCamera className='text-6xl text-gray-100 hover:text-white' />
                  </div>
                </div>
                <input
                  type='file'
                  onChange={handleImageChange}
                  className='hidden'
                />
              </label>
            )}
          </div>

          <div>
            <label
              htmlFor='name'
              className='block font-medium text-lg text-lime-700'
            >
              Product name:
            </label>

            <input
              type='text'
              name='name'
              value={productData.name}
              onChange={handleChange}
              className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            />
          </div>

          <div>
            <label
              htmlFor='price'
              className='block font-medium text-lg text-lime-700'
            >
              Price in USD:
            </label>

            <input
              type='number'
              min={0}
              name='price'
              value={productData.price}
              onChange={handleChange}
              className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            />
          </div>

          <div>
            <label
              htmlFor='countInStock'
              className='block font-medium text-lg text-lime-700'
            >
              In stock:
            </label>

            <input
              type='number'
              min={0}
              name='countInStock'
              value={productData.countInStock}
              onChange={handleChange}
              className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            />
          </div>

          <div>
            <label
              htmlFor='countInStock'
              className='block font-medium text-lg text-lime-700'
            >
              Purchase limit per order
            </label>

            <input
              type='number'
              min={1}
              name='purchaseLimit'
              value={productData.purchaseLimit}
              onChange={handleChange}
              className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
            />
          </div>

          <div>
            <label
              htmlFor='description'
              className='block font-medium text-lg text-lime-700'
            >
              Description:
            </label>

            <textarea
              name='description'
              value={productData.description}
              onChange={handleChange}
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
              onClick={deleteProduct}
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
