import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext(); // Create a context and export it.

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart-items")) || []
  );
  const [clickedId, setClickedId] = useState("home");
  const [cat, setCat] = useState("");
  const [pending, setPending] = useState(false);

  const [pagenum, setPagenum] = useState(0);
  const [data, setData] = useState([]);

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

  // A function that handles page changes.
  const handlePageChange = (e) => {
    const clickedPage = +e.target.getAttribute("value"); // Get which page we are on.
    console.log(clickedPage);
    setPagenum(clickedPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
        params: {
          country: "ca",
          lang: "en",
          currentpage: pagenum,
          pagesize: "9",
          categories: cat,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_HANDM_API_KEY,
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      };

      try {
        setPending(true);
        const res = await axios.request(options);
        const data = await res.data.results;
        setData(data);
        setPending(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (cat !== "") fetchData();
  }, [cat, pagenum]);

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

    setPagenum(0);
  }, [clickedId]);

  return (
    <Context.Provider
      value={{
        cart,
        clickedId,
        cat,
        pending,
        data,
        pagenum,
        updateCart,
        updateClickedNavId,
        updateCat,
        handlePageChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};
