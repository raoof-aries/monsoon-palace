import { motion } from "framer-motion";
import "./AboutSection.css";

import Image2 from "../../../assets/images/home/image2.webp";
import Image5 from "../../../assets/images/home/image5.webp";
import Image6 from "../../../assets/images/gallery/gallery16.webp";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Column - Image Collage */}
        <motion.div
          className="about-image-collage"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="collage-item collage-top-left">
            <img src={Image6} alt="Courtyard" />
          </div>
          <div className="collage-item collage-top-right">
            <img src={Image2} alt="Dining Area" />
          </div>
          <div className="collage-item collage-bottom">
            <img src={Image5} alt="Pool View" />
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <div className="about-content">
          <motion.span 
            className="about-badge"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Us
          </motion.span>

          <motion.h2 
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Experience Luxury <br />
            <span className="gradient-text">Beyond Imagination</span>
          </motion.h2>

          <motion.p 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Nestled in nature's embrace, Monsoon Palace redefines luxury hospitality. 
            Every detail is crafted to create unforgettable moments of tranquility and elegance.
            Escape the ordinary and discover a haven where natural beauty meets refined comfort.
          </motion.p>
          
          <motion.p 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Whether you seek a peaceful retreat or an adventurous getaway, our exquisite 
            accommodations and world-class amenities offer the perfect setting to rejuvenate 
            your spirit and create lasting memories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="/about"
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Discover More
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="about-bg-decoration"></div>
    </section>
  );
};

export default AboutSection;
