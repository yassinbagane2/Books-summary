import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
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
