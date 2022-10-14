import { Link } from 'react-router-dom';
import { FaSadCry, FaLongArrowAltLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className='w-full h-screen flex justify-center items-center bg-white'>
      <div className='font-light text-lime-700 flex flex-col justify-center items-center space-y-6'>
        <FaSadCry size={70} />
        <span className='text-3xl text-center'>Sorry, page not found!</span>

        <Link to='/'>
          <span className='flex justify-center items-center text-lg underline underline-offset-4 cursor-pointer'>
            <FaLongArrowAltLeft />
            <span>Back Home</span>
          </span>
        </Link>
      </div>
    </main>
  );
}
