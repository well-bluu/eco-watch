import { ErrorScreen } from "@/components/ErrorScreen";
import { ButtonLink } from "@/components/ui";
import { colors } from "@/theme/tokens";
import { MapPinOff } from "lucide-react-native";

export default function NotFound() {
  return (
    <ErrorScreen
      icon={<MapPinOff size={36} color={colors.danger} />}
      title="We couldn't find that screen."
      message="The link may be old, or the screen has moved. Your reports are safe."
      actions={
        <ButtonLink href="/" replace>
          Back to Home
        </ButtonLink>
      }
    />
  );
}
