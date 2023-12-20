import { View, ActivityIndicator } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator size="large" style={{ flex: 1 }} />
    </View>
  );
}
