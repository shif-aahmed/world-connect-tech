import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const VantaBg = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        // IMPORTANT: sizing
        minHeight: 5000,
        minWidth: 200,

        scale: 1.0,
        scaleMobile: 1.0,

        // FIX CLUSTERING
        points: 12.0,
        maxDistance: 25.0,
        spacing: 18.0,

        // COLORS
        color: 0xff0000,          // red lines
        backgroundColor: 0x3a3a3a // very dark grey (almost black)
 // black background
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="vanta-bg" />;
};

export default VantaBg;
