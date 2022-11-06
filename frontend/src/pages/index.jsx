import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import PageLoading from '../components/PageLoading';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {}
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <Layout>
      {products.length === 0 ? (
        <span className='block font-light text-xl text-center text-red-600'>
          No products have been posted.
        </span>
      ) : (
        <section className='md:w-[80%] md:mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3  md:gap-8 md:px-0'>
          {products.map((product) => {
            if (product.countInStock > 0) {
              return <ProductCard key={product._id} {...product} />;
            }
          })}
        </section>
      )}
    </Layout>
  );
}
