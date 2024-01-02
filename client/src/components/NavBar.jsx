"use client";

import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Icons.
import { FaOpencart } from "react-icons/fa";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

// Context.
import { Context } from "../context/ContextProvider.js";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [currWindowSize, setCurrWindowSize] = useState(window.innerWidth);

  const { cart, clickedId, updateClickedNavId } = useContext(Context);

  const location = useLocation();

  // Set the id of what navbar item has been clicked.
  const onNavItemClick = (id) => {
    updateClickedNavId(id);
  };

  // Set the status of navbar
  const onUnFoldNav = () => {
    setShowNavBar((prev) => !prev);
  };

  useEffect(() => {
    // Handle window reload
    const handleReload = () => {
      const id = location.pathname.split("/")[1] || "home";
      updateClickedNavId(id);
    };

    // Add event listener when component mounts.
    window.addEventListener("load", handleReload);

    // Remove event listener when component unmounts.
    return () => {
      window.removeEventListener("load", handleReload);
    };
  }, [location, updateClickedNavId]);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setCurrWindowSize(window.innerWidth);
    };

    // Add event listener when component mounts.
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Useeffect used to determine if the full navbar sgould be shown or not.
  useEffect(() => {
    if (currWindowSize < 1220) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [currWindowSize]);

  // A function used to determine the total number of items in cart.
  const totalItemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div className="navbar-container">
      {!showNavBar ? (
        <div className="menu-container">
          <AiOutlineMenuUnfold onClick={onUnFoldNav} />
          <span>{clickedId}</span>
          <Link
            className={`link ${clickedId === "cart" ? "clicked" : ""}`}
            onClick={() => onNavItemClick("cart")}
            to={"/cart"}
          >
            <div className="cart-container">
              {cart.length > 0 && (
                <span className="cart-items">{totalItemsInCart()}</span>
              )}
              <span>
                <FaOpencart />
              </span>
            </div>
          </Link>
        </div>
      ) : currWindowSize < 1220 ? (
        <div className="navbar">
          <AiOutlineMenuFold onClick={onUnFoldNav} id="close-menu" />
          <Link
            className={`link ${clickedId === "home" ? "clicked" : ""}`}
            onClick={() => {
              onNavItemClick("home");
              onUnFoldNav();
            }}
            to={"/"}
          >
            <span>Home</span>
          </Link>

          <Link
            className={`link ${
              clickedId === "men's-clothing" ? "clicked" : ""
            }`}
            onClick={() => {
              onNavItemClick("men's-clothing");
              onUnFoldNav();
            }}
            to={"/men's-clothing"}
          >
            <span>Men</span>
          </Link>

          <Link
            className={`link ${
              clickedId === "women's-clothing" ? "clicked" : ""
            }`}
            onClick={() => {
              onNavItemClick("women's-clothing");
              onUnFoldNav();
            }}
            to={"/women's-clothing"}
          >
            <span>Women</span>
          </Link>

          <Link
            className={`link ${clickedId === "jewlery" ? "clicked" : ""}`}
            onClick={() => {
              onNavItemClick("jewlery");
              onUnFoldNav();
            }}
            to={"/jewlery"}
          >
            <span>Jewelery</span>
          </Link>

          <Link
            className={`link ${clickedId === "login" ? "clicked" : ""}`}
            onClick={() => {
              onNavItemClick("login");
              onUnFoldNav();
            }}
            to={"/login"}
          >
            <span>Login</span>
          </Link>
        </div>
      ) : (
        <div className="navbar">
          <Link
            className={`link ${clickedId === "home" ? "clicked" : ""}`}
            onClick={() => onNavItemClick("home")}
            to={"/"}
          >
            <span>Home</span>
          </Link>

          <Link
            className={`link ${
              clickedId === "men's-clothing" ? "clicked" : ""
            }`}
            onClick={() => onNavItemClick("men's-clothing")}
            to={"/men's-clothing"}
          >
            <span>Men</span>
          </Link>

          <Link
            className={`link ${
              clickedId === "women's-clothing" ? "clicked" : ""
            }`}
            onClick={() => onNavItemClick("women's-clothing")}
            to={"/women's-clothing"}
          >
            <span>Women</span>
          </Link>

          <Link
            className={`link ${clickedId === "jewelry" ? "clicked" : ""}`}
            onClick={() => onNavItemClick("jewelry")}
            to={"/jewelry"}
          >
            <span>Jewelry</span>
          </Link>

          <Link
            className={`link ${clickedId === "cart" ? "clicked" : ""}`}
            onClick={() => onNavItemClick("cart")}
            to={"/cart"}
          >
            <div className="cart-container">
              {cart.length > 0 && (
                <span className="cart-items">{totalItemsInCart()}</span>
              )}
              <span>
                <FaOpencart />
              </span>
            </div>
          </Link>

          <Link
            className={`link ${clickedId === "Login" ? "clicked" : ""}`}
            id="login"
            onClick={() => onNavItemClick("login")}
            to={"/login"}
          >
            <span>Login</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
