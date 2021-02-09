import React from "react";
import "./footer.styles.scss";

const Footer = () => (
  <div>
    <footer>
      <div className="footer-content">
        <div className="footer__message">
          <input
            type="text"
            placeholder="Enter your Email Address"
            className="footer_Email_input"
          />
          <button className="footer_email_button"> Subscribe</button>
        </div>

        <div className="footer__links">
          <div className="footer_subLinks">
            <a href="/">About us </a>
            <a href="/">Customer Service </a>
          </div>

          <div className="footer_subLinks">
            <a href="/"> Search Terms</a>
            <a href="/">Privacy and Cookie Policy</a>
            <a href="/">Orders and Returns</a>
            <a href="/">Advanced Search</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright">
     
        Copyright © React Devlopment 2021. All rights reserved.
      
    </div>
  </div>
);
export default Footer;
