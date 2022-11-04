import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exists = cartItems.find((item) => item._id === product._id);

    if (exists) {
      const newCartItems = cartItems.map((item) =>
        item._id === product._id ? { ...exists, qty: exists.qty + 1 } : exists
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = [
        ...cartItems,
        { ...product, qty: product.minimumOrder },
      ];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };

  const onRemove = (product) => {
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const onUpdateQty = (productId, newQty) => {
    const exists = cartItems.find((item) => item._id === productId);

    if (exists) {
      const newCartItems = cartItems.map((item) =>
        item._id === productId ? { ...exists, qty: newQty } : exists
      );

      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];

    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        onAdd,
        onRemove,
        onUpdateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
