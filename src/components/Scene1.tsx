import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const background = {
  background:
    "linear-gradient(120deg, rgba(10,14,18,1) 0%, rgba(17,22,28,1) 28%, rgba(37,27,20,1) 52%, rgba(15,16,20,1) 100%)",
};

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const zoom = interpolate(frame, [0, 210], [1, 1.08], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        ...background,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        direction: "rtl",
        fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif",
        opacity,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${zoom})`,
          background:
            "radial-gradient(circle at 50% 35%, rgba(255,204,120,0.18), rgba(0,0,0,0.05) 26%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#f4ede2",
          textShadow: "0 0 30px rgba(255,196,103,0.5)",
          paddingTop: 40,
        }}
      >
        <div
          style={{
            fontSize: 170,
            fontWeight: 800,
            letterSpacing: "0.04em",
            color: "#f5dcc0",
            lineHeight: 1,
            filter: "drop-shadow(0 0 18px rgba(255, 195, 110, 0.9))",
          }}
        >
          حَسَن
        </div>

        <div
          style={{
            marginTop: 26,
            fontSize: 42,
            fontWeight: 500,
            color: "#ddd3c8",
            letterSpacing: "0.02em",
            opacity: 0.95,
          }}
        >
          ملامح رجل يبحث عن بداية جديدة
        </div>
      </div>
    </AbsoluteFill>
  );
};
