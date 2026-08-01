import "./App.css";
import { MotionConfig } from "framer-motion";
import { Navbar, Footer, FloatingActions } from "./containers";
import AppRoutes from "./routes/AppRoutes";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <Navbar />
      <AppRoutes />
      <FloatingActions />
      <Footer />
    </MotionConfig>
  );
}

export default App;
