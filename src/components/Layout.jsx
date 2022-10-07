import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <main className='w-full h-auto'>
      <Navbar />

      <section className='pt-24 pb-6'>{children}</section>
    </main>
  );
}
