import React, { useEffect, useState } from 'react';

const Home = () => {

  const [menClothing, setMenClothing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
      const data = await res.json();
      setMenClothing(data);
      console.log(menClothing)
    }

    fetchData();

  }, []);

  return (
    <div className="home-container">
      home
    </div>
  )
}

export default Home