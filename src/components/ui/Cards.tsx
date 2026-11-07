import { cn } from "@/lib/cn";
import { getBarangay } from "@/mocks/places";
import { SAMPLE_NOW } from "@/mocks/residents";
import type { NewsStory, Report, Service } from "@/mocks/types";
import { colors } from "@/theme/tokens";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import type { ReactNode } from "react";
import { Pressable, View } from "react-native";
import { Glass } from "./Glass";
import { ReportProgress } from "./Progress";
import { StatusPill } from "./StatusPill";
import { Text } from "./Text";

export const timeAgo = (iso: string) => {
  const days = Math.round(
    (new Date(SAMPLE_NOW).getTime() - new Date(iso).getTime()) / 86_400_000,
  );
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
};

export function MapBackground({ className }: { className?: string }) {
  return (
    <View
      className={cn("absolute inset-0 bg-map-ground", className)}
      pointerEvents="none"
    >
      <View className="absolute left-0 top-10 h-12 w-16 rounded-br-thumb bg-tint-blue" />
      <View className="absolute inset-x-0 top-[38%] h-3.5 bg-white" />
      <View className="absolute inset-x-0 top-[62%] h-2.5 bg-white" />
      <View className="absolute inset-y-0 left-[30%] w-2.5 bg-white" />
      <View className="absolute inset-y-0 left-[72%] w-3.5 bg-white" />
      <View className="absolute left-[44%] top-[30%] h-[18px] w-[18px] rounded-full border-[3px] border-white bg-navy" />
    </View>
  );
}

export function ReportCard({ report }: { report: Report }) {
  const place = getBarangay(report.barangayId)?.name ?? "";
  return (
    <Link href={`/reports/${report.id}`} asChild>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={`${report.title}, ${place}, ${report.status}`}
        className="h-[268px] w-[232px] justify-end overflow-hidden rounded-tile p-2 active:opacity-90"
      >
        <MapBackground />
        <Glass className="gap-2.5 rounded-thumb p-3.5">
          <View className="gap-0.5">
            <Text numberOfLines={1} className="font-semibold text-row">
              {report.title}
            </Text>
            <Text
              numberOfLines={1}
              className="font-medium text-small text-text-secondary"
            >
              {place}, {timeAgo(report.submittedAt)}
            </Text>
          </View>
          <View className="gap-2.5">
            <StatusPill status={report.status} />
            <ReportProgress status={report.status} size="sm" />
          </View>
        </Glass>
      </Pressable>
    </Link>
  );
}

export function NewsCard({ story }: { story: NewsStory }) {
  return (
    <View className="h-[336px] w-[284px] justify-end overflow-hidden rounded-tile p-2">
      <Image
        source={story.photo}
        contentFit="cover"
        style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      />
      <Glass className="gap-1 rounded-thumb p-3.5">
        <Text
          numberOfLines={2}
          accessibilityLanguage={story.lang}
          className="font-semibold text-row"
        >
          {story.headline}
        </Text>
        <Text className="font-medium text-small text-text-secondary">
          {story.source}, {timeAgo(story.publishedAt)}
        </Text>
      </Glass>
    </View>
  );
}

const serviceTints = {
  gold: "bg-tint-gold",
  sand: "bg-tint-sand",
  blue: "bg-tint-blue",
} as const;

export function ServiceRow({
  service,
  icon,
  tint = "gold",
  divider = false,
  onPress,
}: {
  service: Service;
  icon: ReactNode;
  tint?: keyof typeof serviceTints;
  divider?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      className={cn(
        "flex-row items-center gap-3.5 py-4 active:opacity-70",
        divider && "border-t border-line",
      )}
    >
      <View
        className={cn(
          "h-11 w-11 items-center justify-center rounded-full",
          serviceTints[tint],
        )}
      >
        {icon}
      </View>
      <View className="flex-1 gap-0.5">
        <Text className="font-semibold text-row">{service.name}</Text>
        <Text className="font-medium text-small text-text-secondary">
          {service.handles}
        </Text>
      </View>
      <ChevronRight size={20} color={colors["text-secondary"]} />
    </Pressable>
  );
}
