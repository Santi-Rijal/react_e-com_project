import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Context.
import { Context } from "../context/ContextProvider";

const MoreOptions = () => {
  const [categories, setCategories] = useState([]);

  const { clickedId, catWomen, updateWomenCat } = useContext(Context);

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
        const data =
          clickedId === "women's-clothing"
            ? await res.data.menuItemList[0].ChildMenus[1].ChildMenus
            : await res.data.menuItemList[0].ChildMenus[4].ChildMenus;
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCat();
  }, [clickedId]);

  const handleClick = (cat) => {
    updateWomenCat(cat);
  };

  return (
    <div className="more-options-container">
      <Link
        className={`link more-options ${
          clickedId === "women's-clothing" ? "clicked" : ""
        }`}
        onClick={() => handleClick("women_main")}
        to={`/${clickedId}`}
      >
        <p>{clickedId === "women's-clothing" ? "Women" : "MEN"}</p>
      </Link>
      {categories.map((cat) => (
        <p
          className={`more-options ${catWomen === cat.Key ? "clicked" : ""}`}
          key={cat.Key}
          onClick={() => handleClick(cat.Key)}
        >
          {cat.Name}
        </p>
      ))}
    </div>
  );
};

export default MoreOptions;
