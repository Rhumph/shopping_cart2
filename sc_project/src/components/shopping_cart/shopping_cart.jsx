import { createContext, useState } from "react";

// Create a context for the shopping cart
export const ShoppingCartContext = createContext({
  cart: [],
  addItems: () => {},
  removeCartItem: () => {},
  cartLength: () => {},
});

// Provider component to wrap the application and provide the cart state
export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 10.0, quantity: 1 },
    { id: 2, name: "Product 2", price: 20.0, quantity: 1 },
    { id: 3, name: "Product 3", price: 30.0, quantity: 1 },
  ]);

  const addItems = (item, quantity) => {
    setCart([...cart, { ...item, quantity }]);
  };

  const removeCartItem = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const cartLength = () => {
    return cart.length;
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addItems, removeCartItem, cartLength }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}