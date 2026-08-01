import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GalleryPage.css";

// Import all images from the gallery-new directory
const rawImages = import.meta.glob("../../assets/images/gallery-new/**/*.{jpg,JPG,png,PNG,jpeg,JPEG,webp,WEBP}", { eager: true, import: "default" });

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("ALL");

  const categories = ["ALL", "Rooms", "Indoor Dining", "Outdoor Dining", "Amenities", "Landscape"];

  const allImages = useMemo(() => {
    return Object.keys(rawImages).map((path, index) => {
      const parts = path.split("/");
      const category = parts[parts.length - 2];
      return {
        id: index,
        src: rawImages[path],
        alt: `${category} ${index + 1}`,
        category: category,
      };
    });
  }, []);

  const filteredImages = useMemo(() => {
    if (activeTab === "ALL") return allImages;
    return allImages.filter((img) => img.category === activeTab);
  }, [activeTab, allImages]);

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
        staggerChildren: 0,
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

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <motion.section
      className="galleryPage-wrapper"
      initial="visible"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div className="galleryPage-header" variants={staggerContainer}>
        <motion.span className="galleryPage-badge" variants={fadeInUp}>
          Explore
        </motion.span>
        <motion.h1 className="galleryPage-title" variants={fadeInUp}>
          Visual <span className="galleryPage-titleGradient">Journey</span>
        </motion.h1>
    
      </motion.div>

      {/* Filters */}
      <motion.div className="galleryPage-filters" variants={staggerContainer}>
        {categories.map((cat) => (
          <motion.button
            key={cat}
            className={`galleryPage-filterBtn ${activeTab === cat ? "active" : ""}`}
            onClick={() => setActiveTab(cat)}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div className="galleryPage-grid">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`galleryPage-item ${index % 7 === 0 ? "large" : ""}`}
              onClick={() => setSelectedImage(image)}
              variants={gridItemVariants}
              initial="visible"
              animate="visible"
              exit="exit"
              whileHover={{ y: -8 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
              <motion.div
                className="galleryPage-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="galleryPage-overlayContent">
                  <span className="galleryPage-category">{image.category}</span>
                </div>
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
            initial="visible"
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
              initial="visible"
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
