import type { ReactNode } from "react";
import { View } from "react-native";
import { Screen } from "./ui/Screen";
import { Text } from "./ui/Text";

export function ErrorScreen({
  icon,
  title,
  message,
  actions,
}: {
  icon: ReactNode;
  title: string;
  message: string;
  actions: ReactNode;
}) {
  return (
    <Screen className="px-6 pb-8 pt-16">
      <View className="flex-1 items-start gap-4">
        <View className="h-20 w-20 items-center justify-center rounded-full bg-tint-red">
          {icon}
        </View>
        <Text accessibilityRole="header" className="font-bold text-statement">
          {title}
        </Text>
        <Text className="text-body text-text-secondary">{message}</Text>
      </View>
      <View className="gap-3">{actions}</View>
    </Screen>
  );
}
