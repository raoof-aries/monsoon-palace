import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./FloatingActions.css";

const PHONE_NUMBER = "+918714804320";
const WHATSAPP_NUMBER = "918714804320";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Monsoon Palace, I would like to know more about booking a stay.",
);

const FloatingActions = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastHidden = null;
    const handleScroll = () => {
      const isHome = location.pathname === "/";
      const shouldHide = isHome && window.scrollY < window.innerHeight * 0.8;
      if (shouldHide !== lastHidden) {
        lastHidden = shouldHide;
        setIsHidden(shouldHide);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <div
      className={`floatingActions ${isHidden ? "floatingActions--hidden" : ""}`}
      aria-label="Quick contact actions"
    >
      <a
        className="floatingActions-button floatingActions-button--call"
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Monsoon Palace"
        title="Call"
      >
        <FaPhoneAlt aria-hidden="true" />
      </a>
      <a
        className="floatingActions-button floatingActions-button--whatsapp"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Monsoon Palace"
        title="WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </div>
  );
};

export default FloatingActions;
