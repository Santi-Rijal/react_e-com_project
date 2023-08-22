import React from 'react';
import Hero from '../components/Hero';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import men1 from '../imgs/men1.jpg';
import men2 from '../imgs/men2.jpg';
import men3 from '../imgs/men3.jpg';
import women1 from '../imgs/women1.jpg';
import women2 from '../imgs/women2.jpg';
import women3 from '../imgs/women3.jpg';
import j1 from '../imgs/j1.jpg';
import j2 from '../imgs/j2.jpg';
import j3 from '../imgs/j3.jpg';
import j4 from '../imgs/j4.jpg';

const Home = () => {
  const menHeros = [
    {
      id: 1,
      title: "turtleneck hero",
      header: "Classic Comfort",
      subHeader: "Explore our Stylish Men's Turtleneck Collection",
      action: "SHOP NOW",
      img: men1
    },
    {
      id: 2,
      title: "blazers hero",
      header: "Elevate Your Style",
      subHeader: "Discover the Finest Collection of Men's Blazers",
      action: "SHOP NOW",
      img: men2
    },
    {
      id: 3,
      title: "backpack hero",
      header: "Adventure Awaits",
      subHeader: "Discover Our Stylish Backpack Collection",
      action: "SHOP NOW",
      img: men3
    }
  ];

  const womenHeros = [
    {
      id: 1,
      title: "wheat tops hero",
      header: "Chic in Wheat",
      subHeader: "Discover the Latest Wheat-Colored Tops Collection",
      action: "SHOP NOW",
      img: women1
    },
    {
      id: 2,
      title: "dresses hero",
      header: "Elegant Dresses for Every Occasion",
      subHeader: "Explore Our Collection of Stylish Dresses",
      action: "SHOP NOW",
      img: women2
    },
    {
      id: 3,
      title: "heels hero",
      header: "Elegance Meets Comfort",
      subHeader: "Explore Our Stunning Collection of Women's Heels",
      action: "SHOP NOW",
      img: women3
    }
  ];

  const jewelsHeros = [
    {
      id: 1,
      title: "womens emerald ring hero",
      header: "Captivating Elegance",
      subHeader: "Explore Our Exquisite Collection of Women's Emerald Rings",
      action: "SHOP NOW",
      img: j1
    },
    {
      id: 2,
      title: "mens necklace hero",
      header: "Distinctive Accessories",
      subHeader: "Discover Our Collection of Stylish Men's Necklaces",
      action: "SHOP NOW",
      img: j2
    },
    {
      id: 3,
      title: "womens diamond ring hero",
      header: "Elegance in Every Facet",
      subHeader: "Explore Our Collection of Exquisite Women's Diamond Rings",
      action: "SHOP NOW",
      img: j3
    },
    {
      id: 4,
      title: "mens watch hero",
      header: "Timeless Elegance",
      subHeader: "Explore Our Collection of Stylish Men's Watches",
      action: "SHOP NOW",
      img: j4
    }
  ];

  return (
    <div className="home-container">
      <section className="mens-carousel">
        <Carousel className="carousel-container">
          {
            menHeros.map(heroObj => (
              <Hero key={heroObj.id} heroObj={heroObj}/>
            ))
          }
        </Carousel>
      </section>

      <section className="womens-carousel">
        <Carousel className="carousel-container">
          {
            womenHeros.map(heroObj => (
              <Hero key={heroObj.id} heroObj={heroObj}/>
            ))
          }
        </Carousel>
      </section>

      <section className="jewels-carousel">
        <Carousel className="carousel-container">
          {
            jewelsHeros.map(heroObj => (
              <Hero key={heroObj.id} heroObj={heroObj}/>
            ))
          }
        </Carousel>
      </section>
    </div>
  )
}

export default Home