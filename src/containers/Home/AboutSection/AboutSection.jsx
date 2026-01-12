import { motion } from "framer-motion";
import "./AboutSection.css";

import Image2 from "../../../assets/images/home/image2.webp";
import Image5 from "../../../assets/images/home/image5.webp";
import Image6 from "../../../assets/images/gallery/gallery16.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const leftColumnVariant = {
  hidden: { opacity: 0, x: -40, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightColumnVariant = {
  hidden: { opacity: 0, x: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const galleryItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleBadgeVariant = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "circOut" },
  },
};

const AboutSection = () => {
  return (
    <motion.section
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.18 }} // once:false ensures it animates every time it comes into view
      variants={containerVariants}
    >
      <div className="about-container">
        {/* Image Gallery */}
        <motion.div
          className="about-gallery"
          variants={leftColumnVariant}
          // Each time it comes in view, children will animate (staggered)
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
        >
          <motion.div className="gallery-main" variants={galleryItemVariant}>
            <img src={Image6} alt="Resort view" />
            <div className="image-overlay"></div>
          </motion.div>

          <div className="gallery-grid">
            <motion.div className="gallery-item" variants={galleryItemVariant}>
              <img src={Image5} alt="Pool view" />
              <div className="image-overlay"></div>
            </motion.div>

            <motion.div className="gallery-item" variants={galleryItemVariant}>
              <img src={Image2} alt="Interior" />
              <div className="image-overlay"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="about-content"
          variants={rightColumnVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
        >
          <motion.span className="about-badge" variants={titleBadgeVariant}>
            About Us
          </motion.span>

          <motion.h2
            className="about-title"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Experience Luxury <br />
            <span className="gradient-text">Beyond Imagination</span>
          </motion.h2>

          <motion.p
            className="about-text"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.05, ease: "easeOut" },
              },
            }}
          >
            Nestled in nature's embrace, Monsoon Palace redefines luxury
            hospitality. Every detail is crafted to create unforgettable moments
            of tranquility and elegance. Nestled in nature's embrace, Monsoon
            Palace redefines luxury hospitality. Every detail is crafted to
            create unforgettable moments of tranquility and elegance. Nestled in
            nature's embrace, Monsoon Palace redefines luxury hospitality. Every
            detail is crafted to create unforgettable moments of tranquility and
            elegance.
          </motion.p>

          <motion.button
            className="btn btn-primary"
            variants={{
              hidden: { opacity: 0, y: 12, scale: 0.995 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            // keep button behavior same otherwise
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>

      {/* Background decoration */}
      {/* keep as-is so CSS animations continue working */}
      <div className="about-bg-decoration"></div>
    </motion.section>
  );
};

export default AboutSection;
