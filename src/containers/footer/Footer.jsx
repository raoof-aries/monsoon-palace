import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Monsoon Palace - Aries e-Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
