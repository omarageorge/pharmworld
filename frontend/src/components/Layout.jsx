import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.isAdmin) {
      navigate('/admin');
    }
  }, []);

  return (
    <main className='w-full h-auto'>
      <Navbar />
      <section className='pt-24 pb-6'>{children}</section>
    </main>
  );
}
