import { cn } from "@/lib/cn";
import type { ReportStatus } from "@/mocks/types";
import { colors } from "@/theme/tokens";
import { Check } from "lucide-react-native";
import { View } from "react-native";
import { Text } from "./Text";

const styles: Record<ReportStatus, { box: string; text: string }> = {
  Submitted: { box: "bg-tint-gold", text: "text-ink" },
  Verified: { box: "bg-tint-gold", text: "text-ink" },
  Dispatched: { box: "bg-tint-sand", text: "text-ink" },
  Resolved: { box: "bg-tint-forest", text: "text-forest" },
};

export function StatusPill({
  status,
  className,
}: {
  status: ReportStatus;
  className?: string;
}) {
  return (
    <View
      className={cn(
        "h-[26px] flex-row items-center gap-1 self-start rounded-full px-2.5",
        styles[status].box,
        className,
      )}
    >
      {status === "Resolved" && (
        <Check size={13} strokeWidth={3} color={colors.forest} />
      )}
      <Text className={cn("font-semibold text-chip", styles[status].text)}>
        {status}
      </Text>
    </View>
  );
}
