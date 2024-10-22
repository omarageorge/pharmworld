import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import { UserContext } from '../context/userContext';
import {
  loginStart,
  loginSuccess,
  loginFail,
} from '../context/actions/userActions';
import useInput from '../hooks/useInput';

export default function Login() {
  const navigate = useNavigate();

  const [email, bindEmail] = useInput('');
  const [password, bindPassword] = useInput('');

  const { dispatch, isFetching } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const { data } = await axios.post('/api/auth/login', {
        email,
        password,
      });

      dispatch(loginSuccess(data));

      navigate('/', { replace: true });
    } catch (error) {
      dispatch(loginFail());
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <div className='w-full h-screen '>
      <aside className='hidden fixed w-3/12 h-full lg:block'>
        <div
          className=' relative  z-[0] w-full h-full'
          style={{
            backgroundImage: "url('bg_image_0.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className='absolute z-[1] w-full h-full bg-black opacity-40 '></div>

          <div className='absolute z-[2] w-full h-full flex justify-center items-center'>
            <Link to='/register'>
              <span className='bg-lime-600 hover:bg-lime-500 py-3 px-8 rounded-sm  text-lg text-white uppercase cursor-pointer'>
                Create Account
              </span>
            </Link>
          </div>
        </div>
      </aside>

      <main className='w-full h-full bg-white lg:w-9/12 pt-20 lg:pt-0 lg:ml-[25%]'>
        <Link to='/'>
          <span className='block text-center font-medium text-2xl text-slate-800 pt-6 lg:pr-8 lg:text-right cursor-pointer'>
            Pharmworld
          </span>
        </Link>

        <section className='w-full h-auto flex justify-center pt-3 lg:pt-36'>
          <div className='w-5/6  sm:w-3/6 lg:w-3/6'>
            <span className='block font-light text-2xl text-lime-600 text-center mb-6'>
              Welcome Back!
            </span>

            {errorMessage !== '' && (
              <span className='block font-light text-md text-center text-red-600  mb-6'>
                {errorMessage}
              </span>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <input
                  placeholder='Email'
                  type='email'
                  {...bindEmail}
                  className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
                />
              </div>

              <div>
                <input
                  placeholder='Password'
                  type='password'
                  {...bindPassword}
                  className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
                />
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full bg-lime-600 hover:bg-lime-500 py-3 rounded-sm text-white font-normal transition-all ease-out delay-300'
                  disabled={isFetching && isFetching === true ? true : false}
                >
                  {isFetching ? (
                    <PulseLoader size={12} color='white' />
                  ) : (
                    'SIGN IN'
                  )}
                </button>
              </div>

              <div className='text-center'>
                <span className='font-light text-lg'>
                  Create an account:
                  <Link to='/register'>
                    <span className='ml-2 text-blue-600 underline'>
                      Register
                    </span>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
