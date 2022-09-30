import { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import useInput from '../hooks/useInput';

import bg_image from '../assets/bg_image.jpg';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [username, bindUsername, resetUsername] = useInput('');
  const [password, bindPassword, resetPassword] = useInput('');

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
          className='w-full h-full flex justify-center items-center'
          style={{
            backgroundImage: `url(${bg_image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <a className='bg-lime-600 hover:bg-lime-500 py-3 px-8 rounded-sm  text-lg text-white uppercase cursor-pointer '>
            Create Account
          </a>
        </div>
      </aside>

      <main className='w-full bg-white lg:w-9/12 h-full lg:ml-[25%]'>
        <span className='block text-center font-medium text-2xl text-gray-800 pt-6 lg:pr-8 lg:text-right'>
          Deepharm
        </span>

        <section className='w-full h-auto flex justify-center pt-20 lg:pt-36'>
          <div className='w-5/6  sm:w-3/6 lg:w-3/6'>
            <span className='block font-light text-2xl text-lime-600 text-center mb-6'>
              Welcome Back!
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
                <button
                  type='submit'
                  className='w-full bg-lime-600 hover:bg-lime-500 py-3 rounded-sm text-white font-normal transition-all ease-out delay-300'
                  disabled={loading && 'true'}
                >
                  {loading ? (
                    <PulseLoader size={12} color='white' />
                  ) : (
                    'SIGN IN'
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
