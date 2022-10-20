import React, { createContext, useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';

const INITIAL_STATE = {
  products: [],
  isFetching: false,
  error: false,
};

export const CartContext = createContext(INITIAL_STATE);

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider
      value={{ items: state.products, isFetching: state.isFetching, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}
