import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Screen({
  className,
  edges = ["top", "bottom"],
  tone = "white",
  children,
}: {
  className?: string;
  edges?: ("top" | "bottom")[];
  tone?: "white" | "subtle";
  children: ReactNode;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View
      className={cn("flex-1", tone === "white" ? "bg-white" : "bg-subtle")}
      style={{
        paddingTop: edges.includes("top") ? insets.top : 0,
        paddingBottom: edges.includes("bottom") ? insets.bottom : 0,
      }}
    >
      <View className={cn("flex-1", className)}>{children}</View>
    </View>
  );
}
