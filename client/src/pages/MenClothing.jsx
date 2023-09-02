import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Components.
import ItemCard from "../components/ItemCard";
import MoreOptions from "../components/MoreOptions";

// A page containing all the men's clothing.
const MenClothing = () => {
  const [menClothing, setMenClothing] = useState([]);
  const [pagenum, setPagenum] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list',
        params: {
          category: 'women_main',
          pageSize: '12',
          pageNumber: pagenum,
          sortby: '1'
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_FOREVER21_API_KEY,
          "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
        }
      }

      try {
        const res = await axios.request(options);
        const data = await res.data.CatalogProducts;
        setMenClothing(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pagenum]);

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
          {menClothing.map((itemObj) => (
            <Link
              className="link"
              to={itemObj.pid}
              state={{ itemObj: itemObj }}
              key={itemObj.ProductId}
            >
              <ItemCard itemObj={itemObj} />
            </Link>
          ))}
        </div>
      </div>

      <div className="pages">
        <span
          value="1"
          onClick={handlePageChange}
          className={pagenum === 1 ? "clicked" : ""}
        >
          1
        </span>
        <span
          value="2"
          onClick={handlePageChange}
          className={pagenum === 2 ? "clicked" : ""}
        >
          2
        </span>
        <span
          value="3"
          onClick={handlePageChange}
          className={pagenum === 3 ? "clicked" : ""}
        >
          3
        </span>
        <span
          value="4"
          onClick={handlePageChange}
          className={pagenum === 4 ? "clicked" : ""}
        >
          4
        </span>
        <span
          value="5"
          onClick={handlePageChange}
          className={pagenum === 5 ? "clicked" : ""}
        >
          5
        </span>
      </div>
    </div>
  );
};

export default MenClothing;
