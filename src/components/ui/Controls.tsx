import { cn } from "@/lib/cn";
import { colors } from "@/theme/tokens";
import { Link, type Href } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Animated, Pressable, View } from "react-native";
import { Text } from "./Text";

/** List row: label, optional detail, chevron. */
export function ListRow({
  href,
  label,
  detail,
  className,
}: {
  href: Href;
  label: string;
  detail?: string;
  className?: string;
}) {
  return (
    <Link href={href} asChild>
      <Pressable
        accessibilityRole="link"
        className={cn(
          "min-h-12 flex-row items-center gap-3 py-2 active:opacity-70",
          className,
        )}
      >
        <View className="flex-1">
          <Text className="font-semibold text-row">{label}</Text>
          {detail && (
            <Text className="font-medium text-small text-text-secondary">
              {detail}
            </Text>
          )}
        </View>
        <ChevronRight size={20} color={colors["text-secondary"]} />
      </Pressable>
    </Link>
  );
}

/** Toggle size: 48 × 28 track, 22 knob, 3 px gap all round. */
const TRACK_W = 48;
const TRACK_H = 28;
const KNOB = 22;
const GAP = (TRACK_H - KNOB) / 2; // 3
const TRAVEL = TRACK_W - KNOB - GAP * 2; // 20

/** On/off switch. The whole row is the tap target. */
export function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}) {
  const [x] = useState(() => new Animated.Value(checked ? TRAVEL : 0));
  useEffect(() => {
    Animated.timing(x, {
      toValue: checked ? TRAVEL : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [checked, x]);

  return (
    <Pressable
      onPress={() => onChange(!checked)}
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityState={{ checked }}
      className="min-h-12 flex-row items-center justify-between gap-3"
    >
      <Text className="flex-1 font-semibold text-row">{label}</Text>
      {/* Exact sizes as styles, and an absolutely placed knob,
          so it sits dead centre on every phone */}
      <View
        style={{
          width: TRACK_W,
          height: TRACK_H,
          borderRadius: TRACK_H / 2,
          backgroundColor: checked ? colors.navy : colors.border,
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            top: GAP,
            left: GAP,
            width: KNOB,
            height: KNOB,
            borderRadius: KNOB / 2,
            backgroundColor: colors.white,
            transform: [{ translateX: x }],
          }}
        />
      </View>
    </Pressable>
  );
}

/** Single-choice list with radios (complaint category). */
export function RadioList({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string; detail?: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <View
      accessibilityRole="radiogroup"
      accessibilityLabel={label}
      className="gap-px overflow-hidden rounded-thumb bg-line"
    >
      {options.map((o) => {
        const selected = o.value === value;
        return (
          <Pressable
            key={o.value}
            onPress={() => onChange(o.value)}
            accessibilityRole="radio"
            accessibilityState={{ checked: selected }}
            className="min-h-14 flex-row items-center gap-3.5 bg-white px-4 py-3.5 active:opacity-80"
          >
            <View
              className={cn(
                "h-[22px] w-[22px] items-center justify-center rounded-full border-2",
                selected ? "border-navy" : "border-border",
              )}
            >
              {selected && (
                <View className="h-2.5 w-2.5 rounded-full bg-navy" />
              )}
            </View>
            <View className="flex-1 gap-0.5">
              <Text className="font-semibold text-row">{o.label}</Text>
              {o.detail && (
                <Text className="font-medium text-small text-text-secondary">
                  {o.detail}
                </Text>
              )}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
