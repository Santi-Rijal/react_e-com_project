import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart-items")) || []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart-items", JSON.stringify(newCart));
  };

  return (
    <Context.Provider value={{ cart, updateCart }}>
      {children}
    </Context.Provider>
  )
}