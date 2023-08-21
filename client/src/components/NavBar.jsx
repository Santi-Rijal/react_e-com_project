import React, { useState } from 'react'

import { FaOpencart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [clickedId, setClickedId] = useState("Home");

  const onNavItemClick = (navItemId) => {
    setClickedId(navItemId);
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link className="link">
          <span className={clickedId === "Home" ? "clicked" : ""} onClick={() => onNavItemClick("Home")}>Home</span>
        </Link>

        <Link className="link">
          <span className={clickedId === "Men's Clothing" ? "clicked" : ""} onClick={() => onNavItemClick("Men's Clothing")}>Men's Clothing</span>
        </Link>

        <Link className="link">
          <span className={clickedId === "Women's Clothing" ? "clicked" : ""} onClick={() => onNavItemClick("Women's Clothing")}>Women's Clothing</span>
        </Link>

        <Link className="link">
          <span className={clickedId === "Jewlery" ? "clicked" : ""} onClick={() => onNavItemClick("Jewlery")}>Jewelery</span>
        </Link>

        <Link className="link">
          <span className={clickedId === "Cart" ? "clicked" : ""} onClick={() => onNavItemClick("Cart")}><FaOpencart /></span>
        </Link>

        <Link className="link">
          <span className={clickedId === "Login" ? "clicked" : ""} id="login" onClick={() => onNavItemClick("Login")}>Login</span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
