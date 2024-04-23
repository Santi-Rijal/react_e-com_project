import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(); // Create a context and export it.

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart-items")) || []
  );
  const [clickedId, setClickedId] = useState("home");
  const [cat, setCat] = useState("");

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
  const updateCat = (cat) => {
    setCat(cat);
  };

  useEffect(() => {
    if (clickedId === "women's-clothing") {
      setCat("ladies_all");
    } else if (clickedId === "men's-clothing") {
      setCat("men_all");
    } else if (clickedId === "kids") {
      setCat("kids_all");
    } else {
      setCat("");
    }
  }, [clickedId]);

  return (
    <Context.Provider
      value={{
        cart,
        clickedId,
        cat,
        updateCart,
        updateClickedNavId,
        updateCat,
      }}
    >
      {children}
    </Context.Provider>
  );
};
