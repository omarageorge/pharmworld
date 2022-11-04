import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QUANTITY,
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
        cartItems: [...state.cartItems, { ...product, qty: 1 }],
      };

    case REMOVE_FROM_CART:
      const newCartItems = state.cartItems.filter(
        (item) => item._id !== product._id
      );

      return { ...state, cartItems: newCartItems };

    case UPDATE_ITEM_QUANTITY:
      const { productId, quantity } = action.payload;
      const inCart = state.cartItems.find((item) => item._id === productId);

      if (inCart) {
        const newCartItems = state.cartItems.map((item) =>
          item._id === productId ? { ...inCart, qty: quantity } : inCart
        );

        return { ...state, cartItems: newCartItems };
      }

      return state;

    default:
      return state;
  }
};
