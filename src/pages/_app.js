import UserProvider from '../context/userContext';
import CartProvider from '../context/cartContext';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
