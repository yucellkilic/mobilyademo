"use client";

export default function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ 
        background: "#000000",
        zIndex: -1,
      }}
    />
  );
}
