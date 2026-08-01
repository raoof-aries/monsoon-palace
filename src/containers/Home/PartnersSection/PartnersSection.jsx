import { motion } from "framer-motion";
import {
  FaBed,
  FaCompass,
  FaHotel,
  FaMapMarkedAlt,
  FaPlaneDeparture,
  FaSuitcaseRolling,
} from "react-icons/fa";
import "./PartnersSection.css";

const partners = [
  { name: "Agoda", icon: FaHotel },
  { name: "Tripadvisor", icon: FaCompass },
  { name: "Booking.com", icon: FaBed },
  { name: "MakeMyTrip", icon: FaPlaneDeparture },
  { name: "Goibibo", icon: FaSuitcaseRolling },
  { name: "Kerala Travel", icon: FaMapMarkedAlt },
];

const PartnersSection = () => {
  return (
    <section className="partnersSection-wrapper">
      <div className="partnersSection-container">
        <motion.div
          className="partnersSection-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7 }}
        >
          <span className="partnersSection-badge">Our Partners</span>
          <h2 className="partnersSection-title">
            Trusted Travel <span>Partners</span>
          </h2>
          <p>
            Dummy partner listings for now, ready to be replaced with official
            booking and travel platform logos.
          </p>
        </motion.div>

        <div className="partnersSection-strip" aria-label="Partner platforms">
          {partners.map((partner, index) => {
            const PartnerIcon = partner.icon;

            return (
              <motion.div
                className="partnersSection-logo"
                key={partner.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <PartnerIcon aria-hidden="true" />
                <span>{partner.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
