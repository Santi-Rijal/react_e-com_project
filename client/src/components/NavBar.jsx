import React, { useEffect, useState } from 'react'

import { FaOpencart } from 'react-icons/fa';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';

import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {

  const [clickedId, setClickedId] = useState("home");
  const [showNavBar, setShowNavBar] = useState(true);
  const [currWindowSize, setCurrWindowSize] = useState(window.innerWidth);
  const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem("cart-items")) || []);

  const changeInCart = JSON.parse(window.localStorage.getItem("cart-items"));

  const location = useLocation();

  // Set the id of what navbar item has been clicked.
  const onNavItemClick = (id) => {
    setClickedId(id);
  }

  // Set the status of navbar
  const onUnFoldNav = () => {
    setShowNavBar(prev => !prev);
  }

  useEffect(() => {

    // Handle window reload
    const handleReload = () => {
      const id = location.pathname.split("/")[1] || "home";
      setClickedId(id);
    }

    // Add event listener when component mounts.
    window.addEventListener("load", handleReload);

    // Remove event listener when component unmounts.
    return () => {
      window.removeEventListener("load", handleReload);
    }
  }, [location]);

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

  useEffect(() => {
    const updatedCart = JSON.parse(window.localStorage.getItem("cart-items")) || [];
    setCart(updatedCart);
  }, [changeInCart]);

  return (
    <div className="navbar-container">
      {
        !showNavBar ? (
          <div className="menu-container">
            <AiOutlineMenuUnfold onClick={onUnFoldNav}/>
            <span>{clickedId}</span>
            <Link className={`link ${clickedId === "cart" ? "clicked" : ""}`} onClick={() => {onNavItemClick("cart"); onUnFoldNav()}}>
              <div className="cart-container">
                {cart.length > 0 && <span className="cart-items">{cart.length}</span>}
                <span><FaOpencart /></span>
              </div>            
            </Link>
          </div>
        ) : (
          currWindowSize < 1220 ? (
            <div className="navbar">
              <AiOutlineMenuFold onClick={onUnFoldNav} id="close-menu"/>
              <Link className={`link ${clickedId === "home" ? "clicked" : ""}`} onClick={() => {onNavItemClick("home"); onUnFoldNav()}} to={"/"}>
                <span>Home</span>
              </Link>

              <Link className={`link ${clickedId === "men's-clothing" ? "clicked" : ""}`} onClick={() => {onNavItemClick("men's-clothing"); onUnFoldNav()}} to={"/men's-clothing"}>
                <span>Men's Clothing</span>
              </Link>

              <Link className={`link ${clickedId === "women's-clothing" ? "clicked" : ""}`} onClick={() => {onNavItemClick("women's-clothing"); onUnFoldNav()}} to={"/women's-clothing"}>
                <span>Women's Clothing</span>
              </Link>

              <Link className={`link ${clickedId === "jewlery" ? "clicked" : ""}`} onClick={() => {onNavItemClick("jewlery"); onUnFoldNav()}} to={"/jewlery"}>
                <span>Jewelery</span>
              </Link>

              <Link className={`link ${clickedId === "login" ? "clicked" : ""}`} onClick={() => {onNavItemClick("login"); onUnFoldNav()}}  to={"/login"}>
                <span>Login</span>
              </Link>
            </div>
          ) : (
            <div className="navbar">
              <Link className={`link ${clickedId === "home" ? "clicked" : ""}`} onClick={() => onNavItemClick("home")} to={"/"}>
                <span >Home</span>
              </Link>

              <Link className={`link ${clickedId === "men's-clothing" ? "clicked" : ""}`} onClick={() => onNavItemClick("men's-clothing")} to={"/men's-clothing"}>
                <span>Men's Clothing</span>
              </Link>

              <Link className={`link ${clickedId === "women's-clothing" ? "clicked" : ""}`} onClick={() => onNavItemClick("women's-clothing")} to={"/women's-clothing"}>
                <span>Women's Clothing</span>
              </Link>

              <Link className={`link ${clickedId === "jewelry" ? "clicked" : ""}`} onClick={() => onNavItemClick("jewelry")} to={"/jewelry"}>
                <span>Jewelry</span>
              </Link>

              <Link className={`link ${clickedId === "cart" ? "clicked" : ""}`} onClick={() => onNavItemClick("cart")} to={"/cart"}>
                <div className="cart-container">
                  {cart.length > 0 && <span className="cart-items">{cart.length}</span>}
                  <span><FaOpencart /></span>
                </div>
              </Link>

              <Link className={`link ${clickedId === "Login" ? "clicked" : ""}`} id="login" onClick={() => onNavItemClick("login")} to={"/login"}>
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
