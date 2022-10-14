import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Sambuca - Ramazzotti',
      price: '$3.35',
      image: '/pill.jpg',
    },
    {
      id: 2,
      name: 'Whmis Spray Bottle Graduated',
      price: '$9.26',
      image: '/pill.jpg',
    },
    {
      id: 3,
      name: 'Muffin - Mix - Mango Sour Cherry',
      price: '$1.87',
      image: '/pill.jpg',
    },
    {
      id: 4,
      name: 'Thyme - Fresh',
      price: '$0.58',
      image: '/pill.jpg',
    },
    {
      id: 5,
      name: 'Soup - Chicken And Wild Rice',
      price: '$5.12',
      image: '/pill.jpg',
    },
  ];

  return (
    <Layout>
      <section className='md:w-[80%] md:mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3  md:gap-8 md:px-0 '>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </Layout>
  );
}
