import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Tabs, router } from "expo-router";
import { Entypo, Ionicons } from "@expo/vector-icons";
import storage from "../../lib/storage";
import Loading from "../../components/loading";

export default function TabsLayout() {
  const [isLoading, setIsLoading] = useState(true);

  const checkOnboarding = async () => {
    console.log("checking onboarding value");

    try {
      const value = await storage.load({
        key: "viewedOnboarding",
      });

      console.log("Onboarding from AsyncStorage", value);
    } catch (error) {
      return router.push("/onboarding");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkOnboarding();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarAccessibilityLabel: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="home"
                size={24}
                color={focused ? "#1529FF" : "#525866"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore/index"
        options={{
          tabBarLabel: "Explore",
          tabBarAccessibilityLabel: "Explore",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="md-search"
                size={24}
                color={focused ? "#1529FF" : "#525866"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="library/index"
        options={{
          tabBarLabel: "Library",
          tabBarAccessibilityLabel: "Library",
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="book"
                size={24}
                color={focused ? "#1529FF" : "#525866"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarLabel: "Profile",
          tabBarAccessibilityLabel: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="person-outline"
                size={24}
                color={focused ? "#1529FF" : "#525866"}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
