import React from 'react';
import Hero from '../components/Hero';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import data from '../context/data.js';

const Home = () => {
  return (
    <div className="home-container">
      <section className="mens-carousel">
        <h1 className="carousel-header">MEN</h1>
        <Carousel className="carousel-container">
          {
            data.menHeros.map(heroObj => (
              <Hero key={heroObj.id} heroObj={heroObj}/>
            ))
          }
        </Carousel>
      </section>

      <section className="womens-carousel">
        <h1 className="carousel-header">WOMEN</h1>
        <Carousel className="carousel-container">
          {
            data.womenHeros.map(heroObj => (
              <Hero key={heroObj.id} heroObj={heroObj}/>
            ))
          }
        </Carousel>
      </section>

      <section className="jewels-carousel">
        <h1 className="carousel-header">JEWELRY</h1>
        <Carousel className="carousel-container">
          {
            data.jewelsHeros.map(heroObj => (
              <Hero key={heroObj.id} heroObj={heroObj}/>
            ))
          }
        </Carousel>
      </section>
    </div>
  )
}

export default Home