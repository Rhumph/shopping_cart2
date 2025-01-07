import { createContext, useState, useEffect } from "react";

// Create a context for the shopping cart
export const ShoppingCartContext = createContext({
  cart: [],
  cartTotal: 0,
  addItems: () => {},
  removeCartItem: () => {},
  cartLength: () => {},
});

// Provider component to wrap the application and provide the cart state
export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setCartTotal(total);
  }, [cart]);

  const addItems = (item, quantity) => {
    setCart([...cart, { ...item, quantity }]);
  };

  const removeCartItem = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id)
    setCart(newCart);
  };

  const cartLength = () => {
    return cart.length;
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, cartTotal, addItems, removeCartItem, cartLength }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}