import { useEffect, createContext, useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';

const INITIAL_STATE = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const CartContext = createContext(INITIAL_STATE);

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
