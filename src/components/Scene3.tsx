import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 270], [1.15, 1.0], { extrapolateRight: "clamp" });
  const glow = interpolate(frame, [0, 270], [0.2, 0.8], { extrapolateRight: "clamp" });

  const badges = ["طموح", "تفكير", "عمل", "استمرار"];

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(120deg, rgba(24,18,14,0.92) 0%, rgba(48,32,20,0.9) 36%, rgba(15,18,20,0.93) 100%)",
        direction: "rtl",
        fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${scale})`,
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,190,90,0.2), rgba(34,22,18,0.5) 28%, rgba(0,0,0,0.85) 100%)",
          boxShadow: `inset 0 0 100px rgba(255,170,78,${glow})`,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#f8ebdb",
          padding: "0 150px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 22,
            marginBottom: 34,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {badges.map((badge) => (
            <div
              key={badge}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,203,123,0.35)",
                borderRadius: 999,
                padding: "12px 28px",
                fontSize: 28,
                color: "#f8d7ab",
                boxShadow: "0 0 18px rgba(255,174,90,0.12)",
                backdropFilter: "blur(4px)",
              }}
            >
              {badge}
            </div>
          ))}
        </div>

        <div
          style={{
            maxWidth: 1100,
            fontSize: 40,
            lineHeight: 1.8,
            fontWeight: 500,
            color: "#f5efe8",
          }}
        >
          الطموح لا يتحقق بالأمنيات، بل بخطوات راسخة وسعي لا يهدأ
        </div>
      </div>
    </AbsoluteFill>
  );
};
