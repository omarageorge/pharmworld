import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addProductToCart(action.payload, state);

    case REMOVE_FROM_CART:
      return removeProductFromCart(action.payload, state);
    default:
      return state;
  }
};

function addProductToCart(product, state) {
  const updatedCart = [...state.products];

  const updatedItemIndex = updatedCart.findIndex(
    (item) => item._id === product._id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({
      ...product,
      quantity: 1,
    });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return {
    ...state,
    products: updatedCart,
    total: state.total + product.price,
  };
}

function removeProductFromCart(product, state) {
  const updatedCart = [...state.products];

  const updatedItemIndex = updatedCart.findIndex(
    (item) => item._id === product._id
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };

  updatedItem.quantity--;

  if (updatedItem.quantity === 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return {
    ...state,
    products: updatedCart,
    total: state.total - product.price,
  };
}
