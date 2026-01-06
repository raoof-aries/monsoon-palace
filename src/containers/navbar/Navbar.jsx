import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import LogoFull from "../../assets/images/logo/logo2.png";
import LogoWhite from "../../assets/images/logo/logo-white.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to contact section when hash is present
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#contact") {
      setTimeout(() => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home page, just scroll
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to home page first, then scroll after navigation completes
      navigate("/");
      // Use a longer timeout to ensure the page has rendered
      setTimeout(() => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img
            src={scrolled ? LogoFull : LogoWhite}
            className="logo-img"
            alt="Logo"
          />
        </a>

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
            <a href="/#contact" onClick={handleContactClick}>
              Contact
            </a>
          </li>
          <a href="/booking" className="navbar-actions">
            <button className="btn-book">Book Now</button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
