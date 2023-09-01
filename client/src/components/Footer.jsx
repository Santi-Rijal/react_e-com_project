import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Icons.
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

// Context.
import { Context } from "../context/ContextProvider";

// Footer component of the website.
const Footer = () => {
  const { updateClickedNavId } = useContext(Context);

  // A function to change the clicked id in navbar.
  const linkClicked = (id) => {
    updateClickedNavId(id);
  };

  return (
    <div className="footer-container">
      <div className="info">
        <section className="shop">
          <h3>SHOP</h3>
          <Link
            className="link"
            onClick={() => linkClicked("men's-clothing")}
            to="/men's-clothing"
          >
            <p>Men</p>
          </Link>
          <Link
            className="link"
            onClick={() => linkClicked("women's-clothin")}
            to="/women's-clothing"
          >
            <p>Women</p>
          </Link>
          <Link
            className="link"
            onClick={() => linkClicked("jewelry")}
            to="/jewelry"
          >
            <p>Jewelery</p>
          </Link>
        </section>

        <section className="corporate-info">
          <h3>CORPORATE INFO</h3>
          <p>Career at NovaMall</p>
          <p>About NovaMall group</p>
        </section>

        <section className="help">
          <h3>HELP</h3>
          <p>Customer Service</p>
          <p>My Account</p>
          <p>Store Locator</p>
          <p>Legal & Privacy</p>
          <p>Contact</p>
        </section>
      </div>

      <div className="socials">
        <AiOutlineFacebook className="social-icon" title="Facebook" />
        <AiOutlineInstagram className="social-icon" title="Instagram" />
        <AiOutlineTwitter className="social-icon" title="Twitter" />
        <AiOutlineYoutube className="social-icon" title="Youtube" />
      </div>

      <span>&copy; 2023 NovaMall. All rights reserved.</span>

      <Link className="link" onClick={() => linkClicked("home")} to="/">
        <p>NovaMall</p>
      </Link>
    </div>
  );
};

export default Footer;
