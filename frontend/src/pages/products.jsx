import Layout from '../components/Layout';
import AboutProduct from '../components/AboutProduct';

export default function Products() {
  return (
    <Layout>
      <div className='w-[80%] mx-auto  pb-8'>
        <h1 className='text-3xl font-bold'>Products</h1>

        <div className='grid grid-cols-1 mt-6 space-y-8'>
          <AboutProduct />
          <AboutProduct />
          <AboutProduct />
          <AboutProduct />
        </div>
      </div>
    </Layout>
  );
}
