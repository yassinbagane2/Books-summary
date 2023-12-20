import { useFonts } from "expo-font";
import { SplashScreen, Stack, Slot } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Livvic: require("../assets/fonts/Livvic-Regular.ttf"),
    "Livvic-md": require("../assets/fonts/Livvic-Medium.ttf"),
    "Livvic-sb": require("../assets/fonts/Livvic-SemiBold.ttf"),
    "Livvic-b": require("../assets/fonts/Livvic-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slot />
    </SafeAreaView>
  );
}
