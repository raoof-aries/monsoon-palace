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
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero-section">
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

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-kicker">Deshamangalam</div>

            <h1 className="hero-title" data-text="Monsoon Palace">
              Monsoon Palace
            </h1>

            <p className="hero-desc">
              Wake to emerald views, private poolside calm, and architecture
              shaped for slow, sunlit stays in the hills.
            </p>
          </div>

          <div className="hero-aside">
            <div className="hero-aside-copy">
              <span>Private resort stays</span>
              <strong>
                Poolside mornings, forest air, and quiet evenings.
              </strong>
            </div>

           

            <div
              className="hero-actions"
              role="group"
              aria-label="hero actions"
            >
              <a className="btn btn-primary" href="/booking">
                Book Now
              </a>
              <a className="btn btn-secondary" href="/gallery">
                Gallery
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden>
        <div className="bar">
          <div className="dot" />
        </div>
        Scroll
      </div>
    </section>
  );
};

export default HeroSection;
