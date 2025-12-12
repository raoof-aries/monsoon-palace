import { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="hero-section">
      {/* Background Slider */}
      <div className="hero-slider" aria-hidden>
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
            role="img"
            aria-label={`slide-${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-inner">
          {/* LEFT SIDE — MAIN TEXT (full content area) */}
          <div className="hero-left">
            <span className="hero-subtitle">Boutique Hilltop Retreat</span>

            <h1 className="hero-title" data-text="Monsoon Palace">
              Monsoon Palace
            </h1>

            <p className="hero-desc">
              Elevated design, ethereal views, and curated calm. Immerse in a
              private sanctuary that pairs sculpted architecture with slow
              living.
            </p>

            {/* Two buttons only — they will fill the text area's width per your CSS */}
            <div
              className="hero-actions"
              role="group"
              aria-label="hero actions"
            >
              <button className="btn btn-primary">Book your suite</button>
              <button className="btn btn-secondary">Explore gallery</button>
            </div>
          </div>

          {/* (Optional right column kept as empty element so grid layout stays stable on wide screens)
              Remove the empty div below if you prefer a single-column layout on desktop. */}
          <div aria-hidden="true" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll" aria-hidden>
        <div className="bar">
          <div className="dot" />
        </div>
        Scroll
      </div>

      {/* Slider Dots */}
      <div className="hero-dots" aria-hidden>
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot-btn ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
