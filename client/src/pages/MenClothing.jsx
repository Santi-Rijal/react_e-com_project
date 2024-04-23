import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Components.
import ItemCard from "../components/ItemCard";
import MoreOptions from "../components/MoreOptions";

// Context.
import { Context } from "../context/ContextProvider";

// A page containing all the men's clothing.
const MenClothing = () => {
  const [menClothing, setMenClothing] = useState([]);
  const [pagenum, setPagenum] = useState(0);

  const { cat } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      console.log(cat);
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
          "X-RapidAPI-Key":
            "5c8c14735bmsh3ddd43190f166dfp1d6a64jsn960d37cf18b5",
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      };

      try {
        const res = await axios.request(options);
        const data = await res.data.results;
        setMenClothing(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pagenum, cat]);

  // A function that handles page changes.
  const handlePageChange = (e) => {
    const clickedPage = +e.target.getAttribute("value"); // Get which page we are on.
    setPagenum(clickedPage);
  };

  return (
    <div className="clothing">
      <div className="items-container">
        <MoreOptions />
        <div className="items">
          {menClothing?.map((itemObj) => (
            <Link
              className="link"
              to={itemObj?.pk}
              state={{ itemObj: itemObj }}
              key={itemObj?.code}
            >
              <ItemCard itemObj={itemObj} />
            </Link>
          ))}
        </div>
      </div>

      <div className="pages">
        <span
          value="0"
          onClick={handlePageChange}
          className={pagenum === 0 ? "clicked" : ""}
        >
          1
        </span>
        <span
          value="1"
          onClick={handlePageChange}
          className={pagenum === 1 ? "clicked" : ""}
        >
          2
        </span>
        <span
          value="2"
          onClick={handlePageChange}
          className={pagenum === 2 ? "clicked" : ""}
        >
          3
        </span>
        <span
          value="3"
          onClick={handlePageChange}
          className={pagenum === 3 ? "clicked" : ""}
        >
          4
        </span>
        <span
          value="4"
          onClick={handlePageChange}
          className={pagenum === 4 ? "clicked" : ""}
        >
          5
        </span>
      </div>
    </div>
  );
};

export default MenClothing;
