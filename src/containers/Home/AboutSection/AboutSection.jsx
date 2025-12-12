import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image Gallery */}
        <div className="about-gallery">
          <div className="gallery-main">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
              alt="Resort view"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
                alt="Pool view"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80"
                alt="Interior"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="about-content">
          <span className="about-badge">About Us</span>
          <h2 className="about-title">
            Experience Luxury <br />
            <span className="gradient-text">Beyond Imagination</span>
          </h2>
          <p className="about-text">
            Nestled in nature's embrace, Monsoon Palace redefines luxury
            hospitality. Every detail is crafted to create unforgettable moments
            of tranquility and elegance. Nestled in nature's embrace, Monsoon
            Palace redefines luxury hospitality. Every detail is crafted to
            create unforgettable moments of tranquility and elegance. Nestled in
            nature's embrace, Monsoon Palace redefines luxury hospitality. Every
            detail is crafted to create unforgettable moments of tranquility and
            elegance.
          </p>
          <button className="btn btn-primary">Discover More</button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="about-bg-decoration"></div>
    </section>
  );
};

export default AboutSection;
