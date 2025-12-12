import { useState } from "react";
import "./GalleryPage.css";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "suites", label: "Suites" },
    { id: "dining", label: "Dining" },
    { id: "amenities", label: "Amenities" },
    { id: "views", label: "Views" },
  ];

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      category: "suites",
      title: "Luxury Suite",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      category: "amenities",
      title: "Infinity Pool",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      category: "suites",
      title: "Premium Interior",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      category: "views",
      title: "Mountain View",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      category: "dining",
      title: "Fine Dining",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
      category: "amenities",
      title: "Spa & Wellness",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      category: "suites",
      title: "Ocean View Suite",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      category: "views",
      title: "Sunset Terrace",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80",
      category: "dining",
      title: "Rooftop Restaurant",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      category: "amenities",
      title: "Outdoor Lounge",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      category: "suites",
      title: "Master Bedroom",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1559599238-1a5daffe1012?w=800&q=80",
      category: "views",
      title: "Garden View",
    },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section className="galleryPage-wrapper">
      {/* Header */}
      <div className="galleryPage-header">
        <span className="galleryPage-badge">Explore</span>
        <h1 className="galleryPage-title">Our Gallery</h1>
        <p className="galleryPage-description">
          Discover the beauty and elegance of Monsoon Palace through our curated
          collection of stunning imagery.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="galleryPage-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`galleryPage-filterBtn ${
              activeFilter === cat.id ? "active" : ""
            }`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="galleryPage-grid">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className={`galleryPage-item ${index % 7 === 0 ? "large" : ""}`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.url} alt={image.title} />
            <div className="galleryPage-overlay">
              <h3>{image.title}</h3>
              <div className="galleryPage-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="galleryPage-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="galleryPage-closeBtn"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div
            className="galleryPage-lightboxContent"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="galleryPage-lightboxInfo">
              <h3>{selectedImage.title}</h3>
              <span className="galleryPage-category">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Background Decoration */}
      <div className="galleryPage-bgDecoration"></div>
    </section>
  );
};

export default GalleryPage;
