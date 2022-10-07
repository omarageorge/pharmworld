import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <Layout>
      <section className='grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </Layout>
  );
}
