import { Suspense } from "react";
import { Routes, Route } from "react-router";

// Main Pages
import HomePage from "../pages/Home/Home.jsx";
import OurFacilityPage from "../pages/OurFacilityPage/OurFacilityPage.jsx";
import GalleryPage from "../pages/GalleryPage/GalleryPage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import BookingPage from "../pages/BookingPage/BookingPage.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="route-loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/our-facility" element={<OurFacilityPage />} exact />
        <Route path="/gallery" element={<GalleryPage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/booking" element={<BookingPage />} exact />
        <Route path="/contact" element={<ContactPage />} exact />

        {/* Unknown Routes */}

        {/* <Route path="*" element={<PageNotFoundEl />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
