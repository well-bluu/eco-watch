import { cn } from "@/lib/cn";
import { Link, type Href } from "expo-router";
import type { ReactNode } from "react";
import { Pressable, type PressableProps } from "react-native";
import { Text } from "./Text";

type Kind = "primary" | "secondary" | "quiet";
type Surface = "light" | "navy";

const box: Record<Surface, Record<Kind, string>> = {
  light: {
    primary: "bg-navy",
    secondary: "bg-white border-[1.5px] border-navy",
    quiet: "bg-transparent",
  },
  navy: {
    primary: "bg-white",
    secondary: "bg-glass-dark",
    quiet: "bg-transparent",
  },
};

const label: Record<Surface, Record<Kind, string>> = {
  light: { primary: "text-white", secondary: "text-navy", quiet: "text-navy" },
  navy: {
    primary: "text-navy-deep",
    secondary: "text-white",
    quiet: "text-white",
  },
};

type ButtonProps = Omit<PressableProps, "children"> & {
  kind?: Kind;
  surface?: Surface;
  icon?: ReactNode;
  className?: string;
  children: string;
};

export function Button({
  kind = "primary",
  surface = "light",
  icon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      className={cn(
        "h-14 w-full flex-row items-center justify-center gap-2 rounded-full px-5 active:opacity-80",
        box[surface][kind],
        disabled && "opacity-40",
        className,
      )}
      {...props}
    >
      {icon}
      <Text className={cn("font-semibold text-row", label[surface][kind])}>
        {children}
      </Text>
    </Pressable>
  );
}

export function ButtonLink({
  href,
  replace,
  ...props
}: ButtonProps & { href: Href; replace?: boolean }) {
  return (
    <Link href={href} replace={replace} asChild>
      <Button {...props} />
    </Link>
  );
}
