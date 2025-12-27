import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GalleryPage.css";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", label: "All", icon: "✨" },
    { id: "suites", label: "Suites", icon: "🏛️" },
    { id: "dining", label: "Dining", icon: "🍽️" },
    { id: "amenities", label: "Amenities", icon: "🌊" },
    { id: "views", label: "Views", icon: "🌄" },
  ];

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      category: "suites",
      title: "Luxury Suite",
      description: "Elegantly designed with premium furnishings",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      category: "amenities",
      title: "Infinity Pool",
      description: "Overlooking breathtaking landscapes",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      category: "suites",
      title: "Premium Interior",
      description: "Modern comfort meets traditional aesthetics",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      category: "views",
      title: "Mountain View",
      description: "Panoramic vistas of majestic peaks",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      category: "dining",
      title: "Fine Dining",
      description: "Culinary excellence in every dish",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      category: "amenities",
      title: "Spa & Wellness",
      description: "Rejuvenate your mind and body",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      category: "suites",
      title: "Ocean View Suite",
      description: "Wake up to stunning seascapes",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      category: "views",
      title: "Sunset Terrace",
      description: "Golden hour at its finest",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
      category: "dining",
      title: "Rooftop Restaurant",
      description: "Dining under the stars",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
      category: "amenities",
      title: "Outdoor Lounge",
      description: "Perfect spot for relaxation",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      category: "suites",
      title: "Master Bedroom",
      description: "Spacious and serene sanctuary",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
      category: "views",
      title: "Garden View",
      description: "Lush greenery all around",
    },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

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
      {/* Header */}
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

      {/* Filter Tabs */}
      <motion.div className="galleryPage-filters" variants={staggerContainer}>
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            className={`galleryPage-filterBtn ${
              activeFilter === cat.id ? "active" : ""
            }`}
            onClick={() => setActiveFilter(cat.id)}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="galleryPage-filterIcon">{cat.icon}</span>
            {cat.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div className="galleryPage-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
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
                src={image.url}
                alt={image.title}
                layoutId={`gallery-img-${image.id}`}
              />
              <motion.div
                className="galleryPage-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="galleryPage-overlayContent">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
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
                src={selectedImage.url}
                alt={selectedImage.title}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="galleryPage-lightboxInfo"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="galleryPage-lightboxText">
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                </div>
                <span className="galleryPage-category">
                  {selectedImage.category}
                </span>
              </motion.div>
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
