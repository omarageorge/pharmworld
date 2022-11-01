import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import AboutProduct from '../components/AboutProduct';
import PageLoading from '../components/PageLoading';

export default function About() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <Layout>
      <div className='w-[80%] mx-auto  pb-8'>
        {products.length > 0 && (
          <div className='mb-4'>
            <span className='font-normal text-md text-blue-600 underline underline-offset-4'>
              No Medications on this Website are <strong>PRESSED</strong> or{' '}
              <strong>COUNTERFEIT</strong>, Everything on this website is100%
              legit. We do not sell <strong>FENTANYL</strong>. Patient's Health
              and well being is our number 1 priority.
            </span>
          </div>
        )}

        {/* Products */}
        <div className='grid grid-cols-1 space-y-6'>
          {products.map((product) => (
            <AboutProduct
              key={product._id}
              name={product.name}
              description={product.description}
            />
          ))}
          {products.length <= 0 && <span>No products available</span>}
        </div>
      </div>
    </Layout>
  );
}
