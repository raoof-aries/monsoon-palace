import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  HeroSection,
  AboutSection,
  VideoSection,
  FaqSection,
  PartnersSection,
  ReviewsSection,
} from "../../containers";

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <FaqSection />
      <PartnersSection />
      <ReviewsSection />
    </div>
  );
};

export default Home;
