import { useState, useEffect } from "react";
import "./Navbar.css";
import LogoFull from "../../assets/images/logo/logo2.png";
import LogoWhite from "../../assets/images/logo/logo-white.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={scrolled ? LogoFull : LogoWhite}
            className="logo-img"
            alt="Logo"
          />
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <div className="navbar-actions">
            <button className="btn-book">Book Now</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
