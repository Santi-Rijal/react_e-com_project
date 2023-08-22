import React, { useEffect, useState } from 'react'

import { FaOpencart } from 'react-icons/fa';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const NavBar = () => {

  const [clickedId, setClickedId] = useState("Home");
  const [showNavBar, setShowNavBar] = useState(true);
  const [currWindowSize, setCurrWindowSize] = useState(window.innerWidth)

  // Set the id of what navbar item has been clicked.
  const onNavItemClick = (navItemId) => {
    setClickedId(navItemId);
  }

  // Set the status of navbar
  const onUnFoldNav = () => {
    setShowNavBar(prev => !prev);
  }

  useEffect(() => {

    // Handle window resize
    const handleResize = () => {
      setCurrWindowSize(window.innerWidth);
    }

    // Add event listener when component mounts.
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (currWindowSize < 1220) {
      setShowNavBar(false);
    }
    else {
      setShowNavBar(true);
    }
  }, [currWindowSize]);

  return (
    <div className="navbar-container">
      {
        !showNavBar ? (
          <div className="menu-container">
            <AiOutlineMenuUnfold onClick={onUnFoldNav}/>
            <span>{clickedId}</span>
            <Link className="link">
              <FaOpencart className={clickedId === "Cart" ? "clicked" : ""} onClick={() => onNavItemClick("Cart")}/>
            </Link>
          </div>
        ) : (
          currWindowSize < 1220 ? (
            <div className="navbar">
              <AiOutlineMenuFold onClick={onUnFoldNav} id="close-menu"/>
              <Link className="link">
                <span className={clickedId === "Home" ? "clicked" : ""} onClick={() => {onNavItemClick("Home"); onUnFoldNav()}}>Home</span>
              </Link>

              <Link className="link">
                <span className={clickedId === "Men's Clothing" ? "clicked" : ""} onClick={() => {onNavItemClick("Men's Clothing"); onUnFoldNav()}}>Men's Clothing</span>
              </Link>

              <Link className="link">
                <span className={clickedId === "Women's Clothing" ? "clicked" : ""} onClick={() => {onNavItemClick("Women's Clothing"); onUnFoldNav()}}>Women's Clothing</span>
              </Link>

              <Link className="link">
                <span className={clickedId === "Jewlery" ? "clicked" : ""} onClick={() => {onNavItemClick("Jewlery"); onUnFoldNav()}}>Jewelery</span>
              </Link>

              <Link className="link">
                <span className={clickedId === "Login" ? "clicked" : ""} id="login" onClick={() => onNavItemClick("Login")}>Login</span>
              </Link>
            </div>
          ) : (
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
          )
        )
      }
    </div>
  )
}

export default NavBar
