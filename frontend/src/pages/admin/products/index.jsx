import AdminProductCard from '../../../components/Admin/AdminProductCard';

export default function AdminProducts() {
  const products = [
    {
      id: 1,
      name: 'Sambuca - Ramazzotti',
      price: '$3.35',
      image: '/pill.jpg',
      quantity: 23,
    },
    {
      id: 2,
      name: 'Whmis Spray Bottle Graduated',
      price: '$9.26',
      image: '/pill.jpg',
      quantity: 6,
    },
    {
      id: 3,
      name: 'Muffin - Mix - Mango Sour Cherry',
      price: '$1.87',
      image: '/pill.jpg',
      quantity: 14,
    },
    {
      id: 4,
      name: 'Thyme - Fresh',
      price: '$0.58',
      image: '/pill.jpg',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Soup - Chicken And Wild Rice',
      price: '$5.12',
      image: '/pill.jpg',
      quantity: 0,
    },
  ];

  return (
    <div className='w-full h-auto grid grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-2 md:grid-cols-3'>
      {products.map((product) => (
        <AdminProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
