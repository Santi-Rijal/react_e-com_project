import React, { useEffect, useState } from 'react'
import Item from '../components/Item';

const MenClothing = () => {
  const [menClothing, setMenClothing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://apidojo-forever21-v1.p.rapidapi.com/products/search?query=clothing&rows=12&start=0&gender=Male';
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
        setMenClothing(data.response.docs);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

  }, []);

  return (
    <div className="clothing">
      {menClothing.map(itemObj => (
        <Item key={itemObj.pid} itemObj={itemObj} />
      ))}
    </div>
  )
}

export default MenClothing