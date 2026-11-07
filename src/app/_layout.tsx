import "../global.css";

import { ErrorScreen } from "@/components/ErrorScreen";
import { Button } from "@/components/ui";
import { colors } from "@/theme/tokens";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/plus-jakarta-sans";
import { router, Stack, type ErrorBoundaryProps } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { TriangleAlert } from "lucide-react-native";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.white },
        }}
      />
    </SafeAreaProvider>
  );
}

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SafeAreaProvider>
      <ErrorScreen
        icon={<TriangleAlert size={36} color={colors.danger} />}
        title="Something went wrong."
        message="This screen didn't load. Try again, or go back Home. Anything you were reporting is still saved on your phone."
        actions={
          <>
            <Button onPress={() => retry()}>Try again</Button>
            <Button kind="secondary" onPress={() => router.replace("/")}>
              Back to Home
            </Button>
          </>
        }
      />
    </SafeAreaProvider>
  );
}
