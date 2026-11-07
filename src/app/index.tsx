import { ButtonLink, Text } from "@/components/ui";
import { View } from "react-native";

export default function Launch() {
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-white px-6">
      <Text className="font-bold text-statement">Eco-Watch</Text>
      <ButtonLink href="/dev/components">Component preview</ButtonLink>
    </View>
  );
}
