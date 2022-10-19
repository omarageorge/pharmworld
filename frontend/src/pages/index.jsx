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
        const { data } = await axios.get('http://localhost:5000/api/products');
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
    <Layout>
      <section className='md:w-[80%] md:mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3  md:gap-8 md:px-0 '>
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </section>
    </Layout>
  );
}
