import { motion } from "framer-motion";
import "./VideoSection.css";

const VideoSection = () => {
  /* ---------- Variants ---------- */
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const video = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 22,
      },
    },
  };

  return (
    <section className="video-section">
      <div
        className="video-container"
      >
        {/* Header */}
        <div className="video-header">
          <span className="video-badge">
            Property Video
          </span>

          <h2 className="video-title">
            Experience Monsoon Palace{" "}
            <span className="gradient-text"> In Motion</span>
          </h2>
        </div>

        {/* Video */}
        <div
          className="video-wrapper"
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
        >
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1146485151?badge=0&autopause=0&autoplay=1&muted=1&loop=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
              title="MANSOON PALACE"
            />
          </div>
        </div>
      </div>

      {/* Background decoration — continuous, independent */}
      <div
        className="video-bg-decoration"
        aria-hidden
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default VideoSection;
