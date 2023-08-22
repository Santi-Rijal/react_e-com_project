import React, { useEffect, useState } from 'react'

const MenClothing = () => {
  const [menClothing, setMenClothing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
      const data = await res.json();
      setMenClothing(data);
    }

    fetchData();

  }, []);

  return (
    <div className="men-clothing">
      {menClothing.map(item => (
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

export default MenClothing