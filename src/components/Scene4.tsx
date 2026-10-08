import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 180], [1.06, 1], { extrapolateRight: "clamp" });
  const fade = interpolate(frame, [0, 180], [1, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        direction: "rtl",
        fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif",
        background:
          "linear-gradient(180deg, rgba(12,15,18,0.92) 0%, rgba(18,15,12,0.87) 45%, rgba(0,0,0,0.96) 100%)",
        opacity: fade,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${scale})`,
          background:
            "radial-gradient(circle at 50% 30%, rgba(255,190,93,0.18), rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#f5eadf",
          padding: "0 140px",
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#f7d8a4",
            textShadow: "0 0 28px rgba(255,186,91,0.35)",
            marginBottom: 20,
          }}
        >
          الحكاية لسا ما خلصت.
        </div>

        <div
          style={{
            fontSize: 36,
            color: "#dcd3c8",
            opacity: 0.97,
          }}
        >
          رحلة حسن مستمرة...
        </div>
      </div>
    </AbsoluteFill>
  );
};
