import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const products = [
    {
      id: 1,
      product: 'Sambuca - Ramazzotti',
      price: '$3.35',
      image: '/pill.jpg',
    },
    {
      id: 2,
      product: 'Whmis Spray Bottle Graduated',
      price: '$9.26',
      image: '/pill.jpg',
    },
    {
      id: 3,
      product: 'Muffin - Mix - Mango Sour Cherry',
      price: '$1.87',
      image: '/pill.jpg',
    },
    {
      id: 4,
      product: 'Thyme - Fresh',
      price: '$0.58',
      image: '/pill.jpg',
    },
    {
      id: 5,
      product: 'Soup - Chicken And Wild Rice',
      price: '$5.12',
      image: '/pill.jpg',
    },
  ];
  return (
    <Layout>
      <section className='grid grid-cols-1 tra gap-6 px-6 sm:grid-cols-2 md:grid-cols-3'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </Layout>
  );
}
