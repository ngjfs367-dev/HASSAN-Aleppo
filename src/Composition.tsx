import React, { useMemo } from "react";
import {
  Audio,
  Sequence,
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { Scene1 } from "./components/Scene1";
import { Scene2 } from "./components/Scene2";
import { Scene3 } from "./components/Scene3";
import { Scene4 } from "./components/Scene4";
import { FilmGrain } from "./components/FilmGrain";

export const Documentary: React.FC = () => {
  const frame = useCurrentFrame();

  const audioVolume = useMemo(() => {
    if (frame < 30) return interpolate(frame, [0, 30], [0, 0.8], { extrapolateRight: "clamp" });
    if (frame > 870) return interpolate(frame, [870, 900], [0.8, 0], { extrapolateLeft: "clamp" });
    return 0.8;
  }, [frame]);

  return (
    <AbsoluteFill style={{ background: "#06090d", overflow: "hidden" }}>
      <Sequence from={0} durationInFrames={210}>
        <Scene1 />
      </Sequence>

      <Sequence from={210} durationInFrames={240}>
        <Scene2 />
      </Sequence>

      <Sequence from={450} durationInFrames={270}>
        <Scene3 />
      </Sequence>

      <Sequence from={720} durationInFrames={180}>
        <Scene4 />
      </Sequence>

      <FilmGrain />

      <Audio
        src={staticFile("audio/hasan-documentary.mp3")}
        startFrom={0}
        volume={audioVolume}
      />
    </AbsoluteFill>
  );
};
