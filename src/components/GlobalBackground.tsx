"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    THREE: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VANTA: any;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Don't load twice
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false; // preserve order
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function GlobalBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      try {
        // Load Three.js r134 first (Vanta-compatible version)
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        );
        // Then load Vanta WAVES
        await loadScript(
          "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js"
        );

        if (cancelled || !mountRef.current || vantaEffect.current) return;

        vantaEffect.current = window.VANTA.WAVES({
          el: mountRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          shininess: 51.0,
          waveHeight: 18.0,
          waveSpeed: 1.0,
          zoom: 1.0,
        });
      } catch (e) {
        console.error("Vanta WAVES load error:", e);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (_) {
          // ignore cleanup errors
        }
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ 
        background: "#000000",
        zIndex: -1,
      }}
    />
  );
}
