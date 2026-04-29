import "./App.css";
import { Navbar, Footer, FloatingActions } from "./containers";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <FloatingActions />
      <Footer />
    </>
  );
}

export default App;
