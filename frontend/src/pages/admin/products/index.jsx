import axios from 'axios';
import { useState, useEffect } from 'react';
import AdminProductCard from '../../../components/Admin/AdminProductCard';
import PageLoading from '../../../components/PageLoading';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products', {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).token
            }`,
          },
        });
        setProducts(data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className='w-full h-auto grid grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-2 md:grid-cols-3'>
      {products.map((product) => (
        <AdminProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}
