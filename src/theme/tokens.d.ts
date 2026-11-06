type ColorName =
  | "transparent"
  | "white"
  | "navy"
  | "navy-deep"
  | "gold"
  | "ink"
  | "text-secondary"
  | "text-on-navy-muted"
  | "line"
  | "border"
  | "subtle"
  | "camera"
  | "map-ground"
  | "tint-gold"
  | "tint-blue"
  | "tint-sand"
  | "tint-forest"
  | "tint-red"
  | "forest"
  | "danger"
  | "glass"
  | "glass-edge"
  | "glass-dark";

export declare const colors: Record<ColorName, string>;
export declare const fonts: Record<
  "sans" | "medium" | "semibold" | "bold" | "extrabold",
  string
>;
export declare const fontSize: Record<string, unknown>;
export declare const borderRadius: Record<string, string>;
