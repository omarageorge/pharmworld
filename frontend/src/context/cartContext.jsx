import { useEffect, createContext, useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';
import { clearCart } from './actions/cartActions';

const INITIAL_STATE = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const CartContext = createContext(INITIAL_STATE);

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        dispatch,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
