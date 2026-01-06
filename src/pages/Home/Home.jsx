import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  HeroSection,
  AboutSection,
  VideoSection,
  ContactSection,
} from "../../containers";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts or hash changes
    if (location.hash === "#contact") {
      setTimeout(() => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <ContactSection />
    </div>
  );
};

export default Home;
