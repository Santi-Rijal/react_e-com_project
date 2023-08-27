import React, { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard';

import { Link } from 'react-router-dom';

const WomenClothing = () => {
  const [womenClothing, setWomenClothing] = useState([]);
  const [pagenum, setPagenum] = useState(1);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=clothing&rows=12&start=${start}&gender=Female`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5c8c14735bmsh3ddd43190f166dfp1d6a64jsn960d37cf18b5',
          'X-RapidAPI-Host': 'apidojo-forever21-v1.p.rapidapi.com'
        }
      };

      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setWomenClothing(data.response.docs);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [pagenum, start]);

  const handlePageChange = (e) => {
    const clickedPage = +e.target.getAttribute("value");
    const start = clickedPage === 1 ? (12 * clickedPage) - 12 : (12 * clickedPage) - 11;

    setStart(start);
    setPagenum(clickedPage);
  }

  return (
    <div className="clothing">
      <div className="items">
        {womenClothing.map(itemObj => (
          <Link className="link" to={itemObj.pid} state={{ itemObj: itemObj }} key={itemObj.pid}>
            <ItemCard key={itemObj.pid} itemObj={itemObj} />
          </Link>
        ))}
      </div>

      <div className="pages">
        <span value="1" onClick={handlePageChange} className={pagenum === 1 ? "clicked" : ""}>1</span>
        <span value="2" onClick={handlePageChange} className={pagenum === 2 ? "clicked" : ""}>2</span>
        <span value="3" onClick={handlePageChange} className={pagenum === 3 ? "clicked" : ""}>3</span>
        <span value="4" onClick={handlePageChange} className={pagenum === 4 ? "clicked" : ""}>4</span>
        <span value="5" onClick={handlePageChange} className={pagenum === 5 ? "clicked" : ""}>5</span>
      </div>
    </div>
  )
}

export default WomenClothing