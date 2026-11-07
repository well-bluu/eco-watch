import { cn } from "@/lib/cn";
import { colors, fontSize, fonts } from "@/theme/tokens";
import { Text as RNText, type TextProps } from "react-native";

const has = (keys: string[], prefix: string) =>
  new RegExp(`(^|\\s)${prefix}-(${keys.join("|")})(\\s|$)`);
const hasFont = has(Object.keys(fonts), "font");
const hasSize = has(Object.keys(fontSize), "text");
const hasColor = has(Object.keys(colors), "text");

export function Text({ className = "", ...props }: TextProps) {
  return (
    <RNText
      maxFontSizeMultiplier={1.6}
      className={cn(
        !hasFont.test(className) && "font-sans",
        !hasSize.test(className) && "text-body",
        !hasColor.test(className) && "text-ink",
        className,
      )}
      {...props}
    />
  );
}
