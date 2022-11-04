import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;

      const isProductInCart = state.cartItems.find(
        (item) => item._id === product._id
      );

      return {
        ...state,
        cartItems: isProductInCart
          ? state.cartItems
          : [...state.cartItems, { product, qty: product.minimumOrder }],
        total: state.total + product.price * product.minimumOrder,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product._id !== action.payload._id
        ),
        total: state.total - action.payload.price * action.payload.qty,
      };

    default:
      return state;
  }
};
