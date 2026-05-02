import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  HeroSection,
  AboutSection,
  VideoSection,
  FaqSection,
} from "../../containers";

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <FaqSection />
    </div>
  );
};

export default Home;
