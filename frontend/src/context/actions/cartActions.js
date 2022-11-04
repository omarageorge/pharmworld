import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QUANTITY,
  CLEAR_CART,
} from '../constants/cartConstants';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const updateItemQuantity = (productId, quantity) => {
  return {
    type: UPDATE_ITEM_QUANTITY,
    payload: { productId, quantity },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
