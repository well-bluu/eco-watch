import { cn } from "@/lib/cn";
import { colors, fonts } from "@/theme/tokens";
import {
  ChevronDown,
  CircleAlert,
  Eye,
  EyeOff,
  Search,
} from "lucide-react-native";
import { useId, useState, type ReactNode } from "react";
import { Pressable, TextInput, View, type TextInputProps } from "react-native";
import { Text } from "./Text";

const inputBox =
  "min-h-[54px] w-full flex-row items-center gap-2 rounded-field border-[1.5px] border-border bg-white pl-[18px] pr-3.5";
const errorBox = "border-2 border-danger";
const inputText = "flex-1 text-ink";

const VALUE_FONT = fonts.sans;

const lineInput = {
  fontFamily: VALUE_FONT,
  fontSize: 16,
  paddingVertical: 0,
} as const;
const multiInput = {
  fontFamily: VALUE_FONT,
  fontSize: 16,
  lineHeight: 24,
};

function FieldShell({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: ReactNode;
  children: ReactNode;
}) {
  return (
    <View className="gap-1.5">
      <Text className="font-semibold text-label">{label}</Text>
      {children}
      {error ? (
        <View
          className="flex-row items-start gap-1.5"
          accessibilityLiveRegion="polite"
        >
          <CircleAlert size={16} color={colors.danger} />
          <Text className="flex-1 font-medium text-small text-danger">
            {error}
          </Text>
        </View>
      ) : (
        hint
      )}
    </View>
  );
}

type FieldProps = TextInputProps & {
  label: string;
  error?: string;
  hint?: ReactNode;
  passwordToggle?: boolean;
};

export function Field({
  label,
  error,
  hint,
  passwordToggle,
  className,
  ...props
}: FieldProps) {
  const [shown, setShown] = useState(false);
  return (
    <FieldShell label={label} error={error} hint={hint}>
      <View className={cn(inputBox, error && errorBox, className)}>
        <TextInput
          accessibilityLabel={label}
          accessibilityHint={error}
          placeholderTextColor={colors["text-secondary"]}
          secureTextEntry={passwordToggle && !shown}
          className={cn(inputText, "h-[52px]")}
          style={lineInput}
          {...props}
        />
        {passwordToggle && (
          <Pressable
            onPress={() => setShown((s) => !s)}
            accessibilityRole="button"
            accessibilityLabel={shown ? "Hide password" : "Show password"}
            hitSlop={8}
            className="-mr-2 h-11 w-11 items-center justify-center"
          >
            {shown ? (
              <EyeOff size={20} color={colors["text-secondary"]} />
            ) : (
              <Eye size={20} color={colors["text-secondary"]} />
            )}
          </Pressable>
        )}
      </View>
    </FieldShell>
  );
}

export function SelectField({
  label,
  value,
  placeholder = "Choose",
  error,
  onPress,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  error?: string;
  onPress: () => void;
}) {
  return (
    <FieldShell label={label} error={error}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${label}, ${value ?? placeholder}`}
        className={cn(inputBox, "h-[54px]", error && errorBox)}
      >
        <Text
          className={cn("flex-1 text-input", !value && "text-text-secondary")}
          style={lineInput}
        >
          {value ?? placeholder}
        </Text>
        <ChevronDown size={18} color={colors["text-secondary"]} />
      </Pressable>
    </FieldShell>
  );
}

export function TextAreaField({
  label,
  error,
  maxLength,
  value = "",
  ...props
}: TextInputProps & { label: string; error?: string }) {
  return (
    <FieldShell
      label={label}
      error={error}
      hint={
        maxLength ? (
          <Text className="text-right font-medium text-small text-text-secondary">
            {value.length.toLocaleString()} of {maxLength.toLocaleString()}{" "}
            characters
          </Text>
        ) : undefined
      }
    >
      <TextInput
        multiline
        textAlignVertical="top"
        accessibilityLabel={label}
        value={value}
        maxLength={maxLength}
        placeholderTextColor={colors["text-secondary"]}
        className={cn(
          inputBox,
          inputText,
          "min-h-[120px] py-3.5",
          error && errorBox,
        )}
        style={multiInput}
        {...props}
      />
    </FieldShell>
  );
}

export function SearchField({
  label = "Search",
  className,
  ...props
}: TextInputProps & { label?: string }) {
  const id = useId();
  return (
    <View
      nativeID={id}
      className={cn(
        "h-12 flex-row items-center gap-2.5 rounded-field border-[1.5px] border-border bg-white px-4",
        className,
      )}
    >
      <Search size={20} color={colors["text-secondary"]} />
      <TextInput
        accessibilityLabel={label}
        placeholder={label}
        placeholderTextColor={colors["text-secondary"]}
        returnKeyType="search"
        className={cn(inputText, "h-full")}
        style={lineInput}
        {...props}
      />
    </View>
  );
}
