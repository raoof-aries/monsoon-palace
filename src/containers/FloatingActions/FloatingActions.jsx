import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./FloatingActions.css";

const PHONE_NUMBER = "+918714804320";
const WHATSAPP_NUMBER = "918714804320";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Monsoon Palace, I would like to know more about booking a stay."
);

const FloatingActions = () => {
  return (
    <div className="floatingActions" aria-label="Quick contact actions">
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
