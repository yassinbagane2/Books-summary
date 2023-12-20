import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function register() {
  return (
    <View>
      <Link href={"/login"}>Go to login</Link>
    </View>
  );
}
