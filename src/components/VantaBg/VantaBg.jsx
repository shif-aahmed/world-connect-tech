import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const VantaBg = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Function to get responsive settings
    const getVantaSettings = () => {
      const isMobile = window.innerWidth < 768; // mobile breakpoint

      return {
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 5000,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        // Responsive points & spacing
        points: isMobile ? 6.0 : 12.0,
        maxDistance: isMobile ? 15.0 : 25.0,
        spacing: isMobile ? 10.0 : 18.0,
        // Colors
        color: 0xff0000,          // red lines
        backgroundColor: 0x3a3a3a // very dark grey
      };
    };

    if (!vantaEffect.current) {
      vantaEffect.current = NET(getVantaSettings());
    }

    // Optional: update on resize
    const handleResize = () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = NET(getVantaSettings());
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={vantaRef} className="vanta-bg" />;
};

export default VantaBg;
