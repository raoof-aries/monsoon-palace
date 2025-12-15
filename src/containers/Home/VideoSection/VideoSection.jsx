import { useRef, useState } from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="video-section">
      <div className="video-container">
        {/* Header */}
        <div className="video-header">
          <span className="video-badge">Property Video</span>
          <h2 className="video-title">
            Experience Monsoon Palace{" "}
            <span className="gradient-text"> In Motion</span>
          </h2>
          {/* <p className="video-text">
            Take a cinematic look at the suites, pool, and lush surroundings
            before you arrive.
          </p> */}
        </div>

        {/* Full-width video */}
        <div className="video-wrapper">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1146485151?badge=0&autopause=0&autoplay=1&muted=1&loop=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="MANSOON PALACE"
            />
          </div>
        </div>
      </div>

      <div className="video-bg-decoration"></div>
    </section>
  );
};

export default VideoSection;
