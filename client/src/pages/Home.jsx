import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required a loader for the carousel
import { Carousel } from "react-responsive-carousel";

// Components.
import Hero from "../components/Hero";

// Data used for Hero component
import data from "../context/data.js";

// The home page of the website.
const Home = () => {
  return (
    <div className="home-container">
      <section className="mens-carousel">
        <h1 className="carousel-header">MEN</h1>
        <Carousel className="carousel-container">
          {data.menHeros.map((heroObj) => (
            <Hero key={heroObj.id} heroObj={heroObj} />
          ))}
        </Carousel>
      </section>

      <section className="womens-carousel">
        <h1 className="carousel-header">WOMEN</h1>
        <Carousel className="carousel-container">
          {data.womenHeros.map((heroObj) => (
            <Hero key={heroObj.id} heroObj={heroObj} />
          ))}
        </Carousel>
      </section>

      <section className="jewels-carousel">
        <h1 className="carousel-header">JEWELRY</h1>
        <Carousel className="carousel-container">
          {data.jewelsHeros.map((heroObj) => (
            <Hero key={heroObj.id} heroObj={heroObj} />
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Home;
