import React, { useEffect, useState } from 'react'

const Jewelery = () => {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/jewelery");
      const data = await res.json();
      setJewelry(data);
    }

    fetchData();

  }, []);

  return (
    <div className="jewelry">
      {jewelry.map(item => (
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

export default Jewelery