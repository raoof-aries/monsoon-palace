import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

// Main Pages

const HomePage = lazy(() => import("../pages/Home/Home.jsx"));
const OurFacilityPage = lazy(
  () => import("../pages/OurFacilityPage/OurFacilityPage.jsx"),
);
const GalleryPage = lazy(() => import("../pages/GalleryPage/GalleryPage.jsx"));
const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage.jsx"));
const BookingPage = lazy(() => import("../pages/BookingPage/BookingPage.jsx"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage.jsx"));

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
