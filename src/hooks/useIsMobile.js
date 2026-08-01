import { useState, useEffect } from "react";

/**
 * Reliably detects if the current viewport is a mobile device.
 * Uses useState + useEffect so the check runs AFTER the browser has
 * fully computed layout, preventing the window.innerWidth=0 race condition
 * that occurs when reading it synchronously during the first render.
 */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    // Set the initial value after mount
    setIsMobile(mql.matches);

    // Listen for viewport changes (orientation, resize)
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
