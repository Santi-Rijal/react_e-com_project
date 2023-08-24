import React, { useEffect, useState } from 'react'
import Item from '../components/Item';

const Jewelery = () => {
  const [jewelry, setJewelry] = useState([]);
  const [pagenum, setPagenum] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=jewelry&rows=12&start=0';
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
        setJewelry(data.response.docs);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

  }, [pagenum]);

  const handlePageChange = (e) => {
    setPagenum(+e.target.getAttribute("value"));
  }
  
  return (
    <div className="clothing">
      <div className="items">
        {jewelry.map(itemObj => (
          <Item key={itemObj.id} itemObj={itemObj} />
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

export default Jewelery