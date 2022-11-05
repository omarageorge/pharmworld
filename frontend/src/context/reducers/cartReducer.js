import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
} from '../constants/cartConstants';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const exists = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (exists) {
        const newCartItems = state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...exists, qty: exists.qty + 1 }
            : exists
        );

        return { ...state, cartItems: newCartItems };
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, qty: action.payload.minimumOrder },
        ],
      };

    case REMOVE_FROM_CART:
      const itemInCart = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (itemInCart.qty === itemInCart.minimumOrder) {
        const newCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );

        return { ...state, cartItems: newCartItems };
      }

      const newCartItems = state.cartItems.map((item) =>
        item._id === action.payload._id
          ? { ...itemInCart, qty: itemInCart.qty - 1 }
          : item
      );

      return { ...state, cartItems: newCartItems };

    case DELETE_FROM_CART:
      const filteredCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      return { ...state, cartItems: filteredCartItems };

    case CLEAR_CART:
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};
