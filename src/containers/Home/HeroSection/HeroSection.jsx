import { useState, useEffect } from "react";
import "./HeroSection.css";
import Image1 from "../../../assets/images/home/image1.webp";
import Image4 from "../../../assets/images/home/image4.webp";
import Image8 from "../../../assets/images/home/image8.webp";
import Image7 from "../../../assets/images/home/image7.webp";
import Image9 from "../../../assets/images/home/image9.webp";
import Image3 from "../../../assets/images/home/image3.webp";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [Image1, Image4, Image8, Image7, Image9, Image3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);
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
