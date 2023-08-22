import React, { useEffect, useState } from 'react'

const WomenClothing = () => {
  const [womenClothing, setWomenClothing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
      const data = await res.json();
      setWomenClothing(data);
    }

    fetchData();

  }, []);

  return (
    <div className="women-clothing">
      {womenClothing.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Price: ${item.price}</p>
          <p>Description: {item.description}</p>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  )
}

export default WomenClothing