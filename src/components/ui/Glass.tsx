import { cn } from "@/lib/cn";
import { BlurView } from "expo-blur";
import type { ReactNode } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";

export function Glass({
  className,
  style,
  dark = false,
  children,
}: {
  className?: string;
  style?: StyleProp<ViewStyle>;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <View
      className={cn(
        "overflow-hidden border",
        dark ? "border-glass-dark" : "border-glass-edge",
        className,
      )}
      style={style}
    >
      <BlurView
        intensity={28}
        tint={dark ? "dark" : "light"}
        blurMethod="dimezisBlurViewSdk31Plus"
        style={StyleSheet.absoluteFill}
      />
      <View
        style={StyleSheet.absoluteFill}
        className={dark ? "bg-glass-dark" : "bg-glass"}
      />
      {children}
    </View>
  );
}
