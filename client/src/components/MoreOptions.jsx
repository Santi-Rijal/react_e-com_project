import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

// Context.
import { Context } from "../context/ContextProvider";

const MoreOptions = () => {
  const [categories, setCategories] = useState([]);

  const { clickedId, cat, updateCat } = useContext(Context);

  useEffect(() => {
    const fetchCat = async () => {
      const options = {
        method: "GET",
        url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list",
        headers: {
          "X-RapidAPI-Key":
            "5c8c14735bmsh3ddd43190f166dfp1d6a64jsn960d37cf18b5",
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      };

      try {
        const res = await axios.request(options);
        let data = [];

        if (clickedId === "women's-clothing") {
          data = await res?.data[0]?.CategoriesArray[3]?.CategoriesArray;
        } else if (clickedId === "men's-clothing") {
          data = await res?.data[2]?.CategoriesArray[2]?.CategoriesArray;
        } else if (clickedId === "kids") {
          data = await res?.data[4]?.CategoriesArray[6]?.CategoriesArray;
        }

        setCategories(data);
        window.localStorage.setItem(`${clickedId}-cat`, JSON.stringify(data));
      } catch (err) {
        console.log(err);
      }
    };

    const inStorage = JSON.parse(localStorage.getItem(`${clickedId}-cat`));

    if (inStorage) {
      setCategories(inStorage);
    } else {
      fetchCat();
    }
  }, [clickedId]);

  const handleClick = (cat) => {
    updateCat(cat);
  };

  return (
    <div className="more-options-container">
      {categories?.map((categorie) => (
        <p
          className={`more-options ${
            categorie?.tagCodes[0] === cat ? "clicked" : ""
          }`}
          key={categorie?.CategoryValue}
          onClick={() => handleClick(categorie?.tagCodes[0])}
        >
          {categorie?.CatName}
        </p>
      ))}
    </div>
  );
};

export default MoreOptions;
