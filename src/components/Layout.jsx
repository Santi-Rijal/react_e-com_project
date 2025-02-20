import React from "react";
import { Outlet } from "react-router-dom";

// Components
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

// A layout component that allows the rendering of child router's element if there is one.
const Layout = () => {
  return (
    <div className="layout-container">
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
