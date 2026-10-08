export type SceneKey = "scene1" | "scene2" | "scene3" | "scene4";

export interface VideoProps {
  fps?: number;
  durationInFrames?: number;
}

export interface DocumentarySceneData {
  id: SceneKey;
  title?: string;
  subtitle?: string;
  quote?: string;
  subText?: string;
  badges?: string[];
  body?: string;
  accent?: string;
}
