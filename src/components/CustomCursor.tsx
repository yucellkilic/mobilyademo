"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop mouse devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let animationFrameId: number;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest(".interactive-target") ||
          target.classList.contains("interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Smooth follower physics loop
    const render = () => {
      currentX += (position.x - currentX) * 0.18;
      currentY += (position.y - currentY) * 0.18;
      setFollowerPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center Precision Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#c9a875] rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isHovered ? 0 : 1})`,
        }}
      />

      {/* Smooth Apple-Style Expanding Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isHovered
            ? "w-12 h-12 border-2 border-[#c9a875]/80 bg-[#c9a875]/10 backdrop-blur-[2px] shadow-[0_0_20px_rgba(201,168,117,0.3)]"
            : "w-8 h-8 border border-white/20 bg-transparent"
        }`}
        style={{
          transform: `translate3d(${followerPos.x - (isHovered ? 24 : 16)}px, ${
            followerPos.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      />
    </>
  );
}
