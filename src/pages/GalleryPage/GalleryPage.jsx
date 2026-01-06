import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GalleryPage.css";

import Gallery1 from "../../assets/images/gallery/gallery1.webp";
import Gallery2 from "../../assets/images/gallery/gallery2.webp";
import Gallery3 from "../../assets/images/gallery/gallery3.webp";
import Gallery4 from "../../assets/images/gallery/gallery4.webp";
import Gallery5 from "../../assets/images/gallery/gallery5.webp";
import Gallery6 from "../../assets/images/gallery/gallery6.webp";
import Gallery7 from "../../assets/images/gallery/gallery7.webp";
import Gallery8 from "../../assets/images/gallery/gallery8.webp";
import Gallery9 from "../../assets/images/gallery/gallery9.webp";
import Gallery10 from "../../assets/images/gallery/gallery10.webp";
import Gallery11 from "../../assets/images/gallery/gallery11.webp";
import Gallery12 from "../../assets/images/gallery/gallery12.webp";
import Gallery13 from "../../assets/images/gallery/gallery13.webp";
import Gallery14 from "../../assets/images/gallery/gallery14.webp";
import Gallery15 from "../../assets/images/gallery/gallery15.webp";
import Gallery16 from "../../assets/images/gallery/gallery16.webp";
import Gallery17 from "../../assets/images/gallery/gallery17.webp";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: Gallery1, alt: "Gallery 1" },
    { id: 2, src: Gallery2, alt: "Gallery 2" },
    { id: 3, src: Gallery3, alt: "Gallery 3" },
    { id: 4, src: Gallery4, alt: "Gallery 4" },
    { id: 5, src: Gallery5, alt: "Gallery 5" },
    { id: 6, src: Gallery6, alt: "Gallery 6" },
    { id: 7, src: Gallery7, alt: "Gallery 7" },
    { id: 8, src: Gallery8, alt: "Gallery 8" },
    { id: 9, src: Gallery9, alt: "Gallery 9" },
    { id: 10, src: Gallery10, alt: "Gallery 10" },
    { id: 11, src: Gallery11, alt: "Gallery 11" },
    { id: 12, src: Gallery12, alt: "Gallery 12" },
    { id: 13, src: Gallery13, alt: "Gallery 13" },
    { id: 14, src: Gallery14, alt: "Gallery 14" },
    { id: 15, src: Gallery15, alt: "Gallery 15" },
    { id: 16, src: Gallery16, alt: "Gallery 16" },
    { id: 17, src: Gallery17, alt: "Gallery 17" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const lightboxContentVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      className="galleryPage-wrapper"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* (Optional) Keep a small header — remove this block if you want nothing at top */}
      <motion.div className="galleryPage-header" variants={staggerContainer}>
        <motion.span className="galleryPage-badge" variants={fadeInUp}>
          Explore
        </motion.span>
        <motion.h1 className="galleryPage-title" variants={fadeInUp}>
          Visual <span className="galleryPage-titleGradient">Journey</span>
        </motion.h1>
        <motion.p className="galleryPage-description" variants={fadeInUp}>
          Immerse yourself in the captivating beauty and timeless elegance of
          Desamangalam
        </motion.p>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div className="galleryPage-grid" layout>
        <AnimatePresence mode="popLayout">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`galleryPage-item ${index % 7 === 0 ? "large" : ""}`}
              onClick={() => setSelectedImage(image)}
              variants={gridItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              layoutId={`gallery-item-${image.id}`}
              whileHover={{ y: -8 }}
              transition={{
                layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                layoutId={`gallery-img-${image.id}`}
              />
              <motion.div
                className="galleryPage-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="galleryPage-expandIcon"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </motion.div>
              </motion.div>
              <div className="galleryPage-shimmer"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="galleryPage-lightbox"
            onClick={() => setSelectedImage(null)}
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              className="galleryPage-closeBtn"
              onClick={() => setSelectedImage(null)}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
            <motion.div
              className="galleryPage-lightboxContent"
              onClick={(e) => e.stopPropagation()}
              variants={lightboxContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decoration */}
      <div className="galleryPage-bgDecoration"></div>
    </motion.section>
  );
};

export default GalleryPage;
