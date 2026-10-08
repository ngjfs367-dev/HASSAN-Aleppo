import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const pan = interpolate(frame, [0, 240], [-60, 60], { extrapolateRight: "clamp" });
  const contrast = interpolate(frame, [0, 240], [0.9, 1.2], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        direction: "rtl",
        fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif",
        background:
          "linear-gradient(90deg, rgba(23,18,15,0.95) 0%, rgba(35,27,22,0.8) 32%, rgba(12,13,18,0.82) 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateX(${pan}px) scale(1.05)`,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.42), rgba(0,0,0,0.2)), radial-gradient(circle at 25% 25%, rgba(255,180,86,0.26), rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.7) 100%)",
          filter: `contrast(${contrast})`,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 120px",
          textAlign: "center",
          color: "#f5efe7",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            lineHeight: 1.7,
            fontSize: 42,
            fontWeight: 500,
            opacity: 0.92,
          }}
        >
          بين ثقل الأيام والظروف... يولد الإصرار على تغيير مجرى الحياة
        </div>
      </div>
    </AbsoluteFill>
  );
};
