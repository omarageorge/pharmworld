import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from '../constants/cartConstants';

export const getProductsStart = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

export const getProductsSuccess = (products) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProductsFail = (error) => {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: error,
  };
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const updateQuantity = (product, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { product, quantity },
});
