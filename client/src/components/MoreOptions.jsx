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
        url: "https://apidojo-forever21-v1.p.rapidapi.com/categories/v2/list",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_FOREVER21_API_KEY,
          "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
        },
      };

      try {
        const res = await axios.request(options);
        let data = [];

        if (clickedId === "women's-clothing") {
          data = await res.data.menuItemList[0].ChildMenus[1].ChildMenus[1]
            .ChildMenus;
        } else if (clickedId === "men's-clothing") {
          data = await res.data.menuItemList[0].ChildMenus[3].ChildMenus[1]
            .ChildMenus;
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
      {categories.map((categorie) => (
        <p
          className={`more-options ${categorie.Key === cat ? "clicked" : ""}`}
          key={categorie.Key}
          onClick={() => handleClick(categorie.Key)}
        >
          {categorie.Name}
        </p>
      ))}
    </div>
  );
};

export default MoreOptions;
