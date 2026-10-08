import React from "react";
import { AbsoluteFill } from "remotion";

export const FilmGrain: React.FC = () => {
  return (
    <>
      <AbsoluteFill
        style={{
          pointerEvents: "none",
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.08), rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      <AbsoluteFill
        style={{
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(7,8,10,0.9) 0%, rgba(7,8,10,0.1) 12%, rgba(7,8,10,0.1) 88%, rgba(7,8,10,0.9) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 50%)",
          mixBlendMode: "screen",
          opacity: 0.6,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 60,
          background: "rgba(0,0,0,0.94)",
          pointerEvents: "none",
          zIndex: 30,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 60,
          background: "rgba(0,0,0,0.94)",
          pointerEvents: "none",
          zIndex: 30,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, rgba(255,171,84,0.07), rgba(0,0,0,0.4) 62%, rgba(0,0,0,0.85) 100%)`,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          zIndex: 10,
          opacity: 0.9,
        }}
      />
    </>
  );
};
