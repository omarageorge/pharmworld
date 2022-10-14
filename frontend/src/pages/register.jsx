import { useState } from 'react';
import { Link } from 'react-router-dom';

import PulseLoader from 'react-spinners/PulseLoader';
import useInput from '../hooks/useInput';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [username, bindUsername, resetUsername] = useInput('');
  const [password, bindPassword, resetPassword] = useInput('');
  const [confitmPassword, bindConfirmPassword, resetConfirmPassword] =
    useInput('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='w-full h-screen '>
      <aside className='hidden fixed w-3/12 h-full lg:block'>
        <div
          className=' relative  z-[0] w-full h-full'
          style={{
            backgroundImage: "url('bg_image_1.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className='absolute z-[1] w-full h-full bg-black opacity-40 '></div>

          <div className='absolute z-[2] w-full h-full flex justify-center items-center'>
            <Link to='/login'>
              <span className='bg-lime-600 hover:bg-lime-500 py-3 px-8 rounded-sm  text-lg text-white uppercase cursor-pointer '>
                Sign in
              </span>
            </Link>
          </div>
        </div>
      </aside>

      <main className='w-full bg-white lg:w-9/12 h-full lg:ml-[25%]'>
        <Link to='/'>
          <span className='block text-center font-medium text-2xl text-slate-800 pt-6 lg:pr-8 lg:text-right cursor-pointer'>
            Pharmworld
          </span>
        </Link>

        <section className='w-full h-auto flex justify-center pt-20 lg:pt-36'>
          <div className='w-5/6  sm:w-3/6 lg:w-3/6'>
            <span className='block font-light text-2xl text-lime-600 text-center mb-6'>
              Create an Account
            </span>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className=''>
                <input
                  placeholder='Username'
                  type='text'
                  {...bindUsername}
                  className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
                />
              </div>

              <div className=''>
                <input
                  placeholder='Password'
                  type='password'
                  {...bindPassword}
                  className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
                />
              </div>

              <div className=''>
                <input
                  placeholder='Confirm password'
                  type='password'
                  {...bindConfirmPassword}
                  className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
                />
              </div>

              <div className=''>
                <button
                  type='submit'
                  className='w-full bg-lime-600 hover:bg-lime-500 py-3 rounded-sm text-white font-normal transition-all ease-out delay-300'
                  disabled={loading && 'true'}
                >
                  {loading ? (
                    <PulseLoader size={12} color='white' />
                  ) : (
                    'REGISTER'
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
