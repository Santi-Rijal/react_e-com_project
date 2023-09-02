import React, { createContext, useState } from "react";

export const Context = createContext(); // Create a context and export it.

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart-items")) || []
  );
  const [clickedId, setClickedId] = useState("home");
  const [catWomen, setCatWomen] = useState("women_main");

  // A function used to set a new cart as well as save it to local storage.
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart-items", JSON.stringify(newCart));
  };

  // A function used to update which nav item is on screen.
  const updateClickedNavId = (id) => {
    setClickedId(id);
  };

  // A function to set current caterogy filter for women's page.
  const updateWomenCat = (cat) => {
    setCatWomen(cat);
  }

  return (
    <Context.Provider
      value={{
        cart,
        clickedId,
        catWomen,
        updateCart,
        updateClickedNavId,
        updateWomenCat,
      }}
    >
      {children}
    </Context.Provider>
  );
};
