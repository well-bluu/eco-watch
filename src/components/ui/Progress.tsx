import { cn } from "@/lib/cn";
import { REPORT_STATUSES, type ReportStatus } from "@/mocks/types";
import { View } from "react-native";

type SegmentState = "done" | "empty" | "solved";

const segment: Record<SegmentState, string> = {
  done: "bg-navy",
  empty: "bg-line",
  solved: "bg-forest",
};

export function ProgressSegments({
  total,
  done,
  solved = false,
  size = "md",
  label,
  className,
}: {
  total: number;
  done: number;
  solved?: boolean;
  size?: "sm" | "md";
  label: string;
  className?: string;
}) {
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={label}
      accessibilityValue={{ min: 0, max: total, now: done }}
      className={cn("flex-row gap-1", className)}
    >
      {Array.from({ length: total }, (_, i) => {
        const state: SegmentState =
          i < done ? (solved ? "solved" : "done") : "empty";
        return (
          <View
            key={i}
            className={cn(
              "flex-1 rounded-sm",
              size === "sm" ? "h-[3px]" : "h-1",
              segment[state],
            )}
          />
        );
      })}
    </View>
  );
}

export function ReportProgress({
  status,
  size = "md",
  className,
}: {
  status: ReportStatus;
  size?: "sm" | "md";
  className?: string;
}) {
  const step = REPORT_STATUSES.indexOf(status) + 1;
  return (
    <ProgressSegments
      total={4}
      done={step}
      solved={status === "Resolved"}
      size={size}
      label={`${status}, step ${step} of 4`}
      className={className}
    />
  );
}
