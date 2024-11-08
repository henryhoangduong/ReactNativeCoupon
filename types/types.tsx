import { ViewStyle, Animated, StyleProp } from "react-native";

export type Navigation = {
  navigate: (scene: string) => void;
};

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
}

export interface AuthProps {
  isLogin: boolean;
  loading: boolean;
  login(): void;
  logout(): void;
}

export interface EventsProps {
  id: string;
  name: string;
  uri: string;
  location: string;
  datetime: string;
}

export interface SectionProps {
  name: string;
  items: EventsProps[];
  height: number;
}

export interface ScrollOffset {
  scrollOffsetX: Animated.Value;
  scrollOffsetY: Animated.Value;
}

export interface EventCardProps {
  info: EventCardInfProps;
  style?: ViewStyle;
}

export interface EventCardInfProps {
  id: string;
  uri: string;
  name: string;
  location: string;
  datetime: string;
}

export interface EventDetailsProps {
  id: string;
  uri: string;
  name: string;
  location: string;
  datetime: string;
  description: string;
  antendees: [];
}
