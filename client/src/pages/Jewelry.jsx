import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Components.
import ItemCard from "../components/ItemCard";

// A page containing all the jewelry.
const Jewelery = () => {
  const [jewelry, setJewelry] = useState([]);
  const [pagenum, setPagenum] = useState(1);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=jewelry&rows=12&start=${start}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_FOREVER21_API_KEY,
          "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
        },
      };

      try {
        const res = await axios.request(url, options);
        const data = await res.data.response.docs;
        setJewelry(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pagenum, start]);

  // A function that handles page changes.
  const handlePageChange = (e) => {
    const clickedPage = +e.target.getAttribute("value"); // Get which page we are on.
    const start =
      clickedPage === 1 ? 12 * clickedPage - 12 : 12 * clickedPage - 11; // Starting row for the api.

    setStart(start);
    setPagenum(clickedPage);
  };

  return (
    <div className="clothing">
      <div className="items">
        {jewelry.map((itemObj) => (
          <Link
            className="link"
            to={itemObj.pid}
            state={{ itemObj: itemObj }}
            key={itemObj.pid}
          >
            <ItemCard key={itemObj.pid} itemObj={itemObj} />
          </Link>
        ))}
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

export default Jewelery;
