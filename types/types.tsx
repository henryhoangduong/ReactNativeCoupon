import { Animated, StyleProp, ViewStyle } from "react-native";

export type Navigation = {
  navigate: (scene: string) => void;
};

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
}

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string;
  image: string;
}
