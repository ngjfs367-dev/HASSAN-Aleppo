import React from "react";
import { Composition } from "remotion";
import { Documentary } from "./Composition";

export const Root: React.FC = () => {
  return (
    <Composition
      id="HasanDocumentary"
      component={Documentary}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
