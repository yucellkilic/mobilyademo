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
        // Then load Vanta FOG
        await loadScript(
          "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js"
        );

        if (cancelled || !mountRef.current || vantaEffect.current) return;

        vantaEffect.current = window.VANTA.FOG({
          el: mountRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x1f1100,
          midtoneColor: 0x464040,
          lowlightColor: 0x0e4e4f,
          baseColor: 0x0,
          blurFactor: 0.6,
          speed: 1.0,
          zoom: 1.2,
        });
      } catch (e) {
        console.error("Vanta FOG load error:", e);
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
