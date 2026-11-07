import { cn } from "@/lib/cn";
import { Image } from "expo-image";
import { View } from "react-native";
import { Glass } from "./Glass";
import { Text } from "./Text";

const seal = require("../../../assets/images/seal.png");

export function BrandChip({
  surface = "light",
  className,
}: {
  surface?: "photo" | "light" | "navy";
  className?: string;
}) {
  const content = (
    <>
      <Image
        source={seal}
        style={{ width: 34, height: 34, borderRadius: 17 }}
      />
      <Text
        className={cn(
          "font-semibold",
          surface === "navy" ? "text-white" : "text-ink",
        )}
      >
        Eco-Watch
      </Text>
    </>
  );

  if (surface === "photo") {
    return (
      <Glass className={cn("self-start rounded-full", className)}>
        <View
          accessible
          accessibilityLabel="Eco-Watch"
          className="h-[46px] flex-row items-center gap-2 pl-[5px] pr-3.5"
        >
          {content}
        </View>
      </Glass>
    );
  }
  return (
    <View
      accessible
      accessibilityLabel="Eco-Watch"
      className={cn("h-11 flex-row items-center gap-2", className)}
    >
      {content}
    </View>
  );
}
