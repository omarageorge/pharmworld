import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QUANTITY,
  CLEAR_CART,
} from '../constants/cartConstants';

export const cartReducer = (state, action) => {
  const product = action.payload;

  switch (action.type) {
    case ADD_TO_CART:
      const exists = state.cartItems.find((item) => item._id === product._id);

      if (exists) {
        const newCartItems = state.cartItems.map((item) =>
          item._id === product._id ? { ...exists, qty: exists.qty + 1 } : exists
        );

        return { ...state, cartItems: newCartItems };
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...product, qty: product.minimumOrder },
        ],
      };

    case REMOVE_FROM_CART:
      const newCartItems = state.cartItems.filter(
        (item) => item._id !== product._id
      );

      return { ...state, cartItems: newCartItems };

    case UPDATE_ITEM_QUANTITY:
      const inCart = state.cartItems.find(
        (item) => item._id === action.payload.productId
      );

      const updatedCartItems = state.cartItems.map((item) =>
        item._id === action.payload.productId
          ? { ...inCart, qty: action.payload.quantity }
          : inCart
      );

      return { ...state, cartItems: updatedCartItems };

    case CLEAR_CART:
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};
