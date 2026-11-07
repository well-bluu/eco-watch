import { cn } from "@/lib/cn";
import { colors } from "@/theme/tokens";
import { router, usePathname, type Href } from "expo-router";
import {
  Camera,
  ClipboardList,
  House,
  Megaphone,
  UserRound,
} from "lucide-react-native";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Glass } from "./Glass";
import { Text } from "./Text";

const tabs = [
  { href: "/home", label: "Home", Icon: House },
  { href: "/news", label: "News", Icon: Megaphone },
  { href: "/report", label: "Report", Icon: Camera, centre: true },
  { href: "/my-reports", label: "My reports", Icon: ClipboardList },
  { href: "/profile", label: "Profile", Icon: UserRound },
] as const;

export function TabBar() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute inset-x-0 bottom-0 px-4"
      style={{ paddingBottom: Math.max(12, insets.bottom) }}
      pointerEvents="box-none"
    >
      <Glass
        className="rounded-full"
        style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.14)" }}
      >
        <View
          accessibilityRole="tablist"
          className="h-[66px] flex-row items-center px-1.5"
        >
          {tabs.map(({ href, label, Icon, ...t }) => {
            const active = pathname.startsWith(href);
            const centre = "centre" in t;
            return (
              <Pressable
                key={href}
                onPress={() => router.navigate(href as Href)}
                accessibilityRole="tab"
                accessibilityState={{ selected: active }}
                accessibilityLabel={label}
                className="min-h-11 flex-1 items-center justify-center gap-0.5"
              >
                {centre ? (
                  <View className="h-11 w-11 items-center justify-center rounded-full bg-navy">
                    <Camera size={22} color={colors.white} />
                  </View>
                ) : (
                  <View
                    className={cn(
                      "h-[30px] w-12 items-center justify-center rounded-full",
                      active && "bg-ink",
                    )}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.75}
                      color={active ? colors.white : colors.ink}
                    />
                  </View>
                )}
                <Text
                  className={cn(
                    "text-tab",
                    active || centre
                      ? "font-bold text-ink"
                      : "font-medium text-text-secondary",
                  )}
                >
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </Glass>
    </View>
  );
}
