import { useEffect, createContext, useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';

const INITIAL_STATE = JSON.parse(localStorage.getItem('cart')) || {
  cartItems: [],
  total: 0,
};

export const CartContext = createContext(INITIAL_STATE);

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        total: state.total,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
