import React from 'react'

import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="info">
        <section className="shop">
          <h3>SHOP</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Jewelery</p>
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
        <AiOutlineFacebook className="social-icon" title="Facebook"/>
        <AiOutlineInstagram className="social-icon" title="Instagram"/>
        <AiOutlineTwitter className="social-icon" title="Twitter"/>
        <AiOutlineYoutube className="social-icon" title="Youtube"/>
      </div>
      <span>&copy; 2023 NovaMall. All rights reserved.</span>
      <p>NovaMall</p>
    </div>
  )
}

export default Footer