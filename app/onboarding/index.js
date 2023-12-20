import { View, Text, Dimensions, Image } from "react-native";
import { Button } from "react-native-paper";
import { Link, router } from "expo-router";
import { colors } from "../../config/colors";
import storage from "../../lib/storage";

export default function onboarding() {
  function handleLogin() {
    storage.save({ key: "viewedOnboarding", data: { viewed: true } });
    return router.push("login");
  }

  const { width } = Dimensions.get("screen");
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{
          objectFit: "cover",
          width,
          marginBottom: -28,
        }}
        source={require("../../assets/images/onboarding.png")}
      />
      <View style={{ paddingHorizontal: 12 }}>
        <Text
          style={{ fontFamily: "Livvic-sb", fontSize: 28 }}
          className="text-3xl"
        >
          Read, Listen, and watch anywhere
        </Text>
        <Text style={{ marginVertical: 8 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magnam
          laboriosam, natus illo distinctio magni tenetur deleniti dolores
          exercitationem provident?
        </Text>
        <Button
          mode="contained"
          buttonColor={colors.primaryColor}
          style={{ paddingVertical: 4, marginBottom: 8 }}
          onPress={() => router.push("/onboarding/objectives")}
        >
          Get started
        </Button>
        <Button
          mode="outlined"
          textColor="black"
          style={{ paddingVertical: 4 }}
          onPress={handleLogin}
        >
          <Text style={{ fontWeight: 600 }}>Login</Text>
        </Button>
      </View>
      <Link href={"/"}>home</Link>
    </View>
  );
}
