import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import AboutProduct from '../components/AboutProduct';
import PageLoading from '../components/PageLoading';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    getProducts();
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
    <Layout>
      <div className='w-[80%] mx-auto  pb-8'>
        <h1 className='text-3xl font-bold'>Products</h1>

        <div className='grid grid-cols-1 mt-6 space-y-8'>
          {products.map((product) => (
            <AboutProduct key={product._id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
