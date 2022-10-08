import React, { createContext, useReducer, useEffect } from 'react';
import { cartReducer } from './reducers/cartReducer';

const INITIAL_STATE = {
  products: JSON.parse(localStorage.getItem('cart')) || [],
  total: 0,
};

export const CartContext = createContext(INITIAL_STATE);

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.products));
  }, [state.products]);

  return (
    <CartContext.Provider
      value={{ items: state.products, total: state.total, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}
