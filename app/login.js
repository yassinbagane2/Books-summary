import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function login() {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text>login page</Text>
      <Link href={"/"}>Go to home</Link>
    </View>
  );
}
