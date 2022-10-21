import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import { UserContext } from '../context/userContext';
import {
  registerStart,
  registerSuccess,
  registerFail,
} from '../context/actions/userActions';
import useInput from '../hooks/useInput';

export default function Register() {
  const navigate = useNavigate();

  const [username, bindUsername] = useInput('');
  const [email, bindEmail] = useInput('');
  const [password, bindPassword] = useInput('');
  const [confirmPassword, bindConfirmPassword] = useInput('');

  const { user, dispatch, isFetching } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    dispatch(registerStart());

    try {
      const { data } = await axios.post('/api/auth/register', {
        name: username,
        email,
        password,
      });

      dispatch(registerSuccess(data));

      user && user.isAdmin === true
        ? navigate('/admin', { replace: true })
        : navigate('/', { replace: true });
    } catch (err) {
      dispatch(registerFail());
      setErrorMessage(err.response.data.message);
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

        <section className='w-full h-auto flex justify-center pt-20 lg:pt-5'>
          <div className='w-5/6  sm:w-3/6 lg:w-3/6'>
            <span className='block font-light text-2xl text-lime-600 text-center mb-6'>
              Create an Account
            </span>

            <span className='block font-light text-md text-blue-600 text-left mb-6'>
              <span className='font-bold text-lg text-yellow-500 mr-2'>
                Caution:
              </span>
              Please register using a darknet anonymous email address which you
              can get from
              <a
                className='mx-1 underline underline-offset-4'
                target='_blank'
                href='http://dnmxjaitaiafwmss2lx7tbs5bv66l7vjdmb5mtb3yqpxqhk3it5zivad.onion/'
              >
                https://dnmx.org.
              </a>
              Please note that this email provider can only be accessed through
              the Tor Browser.
            </span>

            {errorMessage !== '' && (
              <span className='block font-light text-md text-center text-red-600  mb-6'>
                {errorMessage}
              </span>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <input
                  placeholder='Username'
                  type='text'
                  {...bindUsername}
                  className='w-full border-b border-gray-400 outline-none focus:border-green-600 pl-1 py-2  font-light text-md'
                />
              </div>

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
                <input
                  placeholder='Confirm password'
                  type='password'
                  {...bindConfirmPassword}
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
