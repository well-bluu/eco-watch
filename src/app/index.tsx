import { Text } from "@/components/ui";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Launch() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 items-center justify-center bg-navy px-12">
      <StatusBar style="light" />
      <View className="-mt-12 items-center gap-7">
        <Image
          source={require("../../assets/images/seal.png")}
          style={{ width: 208, height: 208, borderRadius: 104 }}
          accessibilityLabel="Mandaue City Eco Watch seal"
        />
        <View className="items-center gap-2.5">
          <Text
            accessibilityRole="header"
            className="font-bold text-hero text-white"
          >
            Eco-Watch
          </Text>
          <Text className="text-center text-row text-text-on-navy-muted">
            Report environmental problems in Mandaue straight to MCENRO.
          </Text>
        </View>
        {__DEV__ && (
          <Link href="/dev/components">
            <Text className="font-semibold text-body text-gold underline">
              Component preview (dev)
            </Text>
          </Link>
        )}
      </View>
      <Text
        className="absolute text-small text-text-on-navy-muted"
        style={{ bottom: Math.max(24, insets.bottom + 8) }}
      >
        Mandaue City Environment and Natural Resources Office
      </Text>
    </View>
  );
}
