import React, { useEffect, useState } from 'react'

import { FaOpencart } from 'react-icons/fa';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const NavBar = () => {

  const [clickedId, setClickedId] = useState("Home");
  const [showNavBar, setShowNavBar] = useState(true);
  const [currWindowSize, setCurrWindowSize] = useState(window.innerWidth);
  const cart = JSON.parse(window.localStorage.getItem("cart-items")) || [];

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
              <div className="cart-container">
                {cart.length > 0 && <span className="cart-items">{cart.length}</span>}
                <span className={clickedId === "Cart" ? "clicked" : ""} onClick={() => onNavItemClick("Cart")}><FaOpencart /></span>
              </div>            
            </Link>
          </div>
        ) : (
          currWindowSize < 1220 ? (
            <div className="navbar">
              <AiOutlineMenuFold onClick={onUnFoldNav} id="close-menu"/>
              <Link className="link" to={"/"}>
                <span className={clickedId === "Home" ? "clicked" : ""} onClick={() => {onNavItemClick("Home"); onUnFoldNav()}}>Home</span>
              </Link>

              <Link className="link" to={"/men's-clothing"}>
                <span className={clickedId === "Men's Clothing" ? "clicked" : ""} onClick={() => {onNavItemClick("Men's Clothing"); onUnFoldNav()}}>Men's Clothing</span>
              </Link>

              <Link className="link" to={"/women's-clothing"}>
                <span className={clickedId === "Women's Clothing" ? "clicked" : ""} onClick={() => {onNavItemClick("Women's Clothing"); onUnFoldNav()}}>Women's Clothing</span>
              </Link>

              <Link className="link" to={"/jewlery"}>
                <span className={clickedId === "Jewlery" ? "clicked" : ""} onClick={() => {onNavItemClick("Jewelry"); onUnFoldNav()}}>Jewelery</span>
              </Link>

              <Link className="link"  to={"/login"}>
                <span className={clickedId === "Login" ? "clicked" : ""} id="login" onClick={() => onNavItemClick("Login")}>Login</span>
              </Link>
            </div>
          ) : (
            <div className="navbar">
              <Link className={`link ${clickedId === "Home" ? "clicked" : ""}`} onClick={() => onNavItemClick("Home")} to={"/"}>
                <span >Home</span>
              </Link>

              <Link className={`link ${clickedId === "Men's Clothing" ? "clicked" : ""}`} onClick={() => onNavItemClick("Men's Clothing")} to={"/men's-clothing"}>
                <span>Men's Clothing</span>
              </Link>

              <Link className={`link ${clickedId === "Women's Clothing" ? "clicked" : ""}`} onClick={() => onNavItemClick("Women's Clothing")} to={"/women's-clothing"}>
                <span>Women's Clothing</span>
              </Link>

              <Link className={`link ${clickedId === "Jewelry" ? "clicked" : ""}`} onClick={() => onNavItemClick("Jewelry")} to={"/jewelry"}>
                <span>Jewelry</span>
              </Link>

              <Link className={`link ${clickedId === "Cart" ? "clicked" : ""}`} onClick={() => onNavItemClick("Cart")} to={"/cart"}>
                <div className="cart-container">
                  {cart.length > 0 && <span className="cart-items">{cart.length}</span>}
                  <span><FaOpencart /></span>
                </div>
              </Link>

              <Link className={`link ${clickedId === "Login" ? "clicked" : ""}`} id="login" onClick={() => onNavItemClick("Login")} to={"/login"}>
                <span>Login</span>
              </Link>
            </div>
          )
        )
      }
    </div>
  )
}

export default NavBar
