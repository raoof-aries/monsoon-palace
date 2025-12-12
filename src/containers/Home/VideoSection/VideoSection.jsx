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
        <div className="video-wrapper" onClick={handleTogglePlay}>
          <video
            ref={videoRef}
            className="video-element"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop"
            playsInline
            preload="metadata"
            muted
          />
          {!isPlaying && (
            <button
              type="button"
              className="video-play-overlay"
              aria-label="Play property video"
            >
              <span className="video-play-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="video-bg-decoration"></div>
    </section>
  );
};

export default VideoSection;
