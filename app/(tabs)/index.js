import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import BooksCarousel from "../../components/books-carousel";
import storage from "../../lib/storage";
import { router } from "expo-router";

export default function HomeScreen() {
  function handleRemove() {
    storage.remove({
      key: "viewedOnboarding",
    });
    router.push("/onboarding");
  }
  return (
    <View style={styles.container}>
      <Pressable style={{ paddingTop: 26 }} onPress={handleRemove}>
        <Text>Remove onboarding value</Text>
      </Pressable>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>For you</Text>
          <Pressable onPress={() => console.log("opening notifications")}>
            <Ionicons name="md-notifications-outline" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.dailySection}>
          <Text style={styles.subtitle}>Free daily summary</Text>
          <LinearGradient
            style={styles.dailyBox}
            colors={["#1529FF", "#0011C6"]}
          >
            <Image
              source={require("../../assets/images/Book-cover.png")}
              style={styles.boxImage}
            />

            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 24,
                  width: "70%",
                  color: "white",
                  marginBottom: 12,
                }}
              >
                Leave the world behind
              </Text>
              <Text style={{ color: "white", marginBottom: 8 }}>
                Rumaan Alam
              </Text>
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 1 }}
              >
                <Text style={{ color: "white" }}>Read now</Text>
                <Ionicons name="arrow-forward" size={24} color="white" />
              </Pressable>
            </View>
            <Image
              source={require("../../assets/images/Shape.png")}
              style={styles.shapeImage}
            />
          </LinearGradient>
        </View>

        <View>
          <Text style={styles.subtitle}>Today for you</Text>
          <BooksCarousel data={[1, 2, 3, 4]} />
        </View>
        <View>
          <Text style={styles.subtitle}>To be productive</Text>
          <BooksCarousel data={[1, 2, 3, 4]} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 600,
    marginVertical: 8,
  },
  dailySection: {
    marginTop: 20,
  },
  dailyBox: {
    position: "relative",
    width: "100%",
    height: 170,
    padding: 8,
    borderRadius: 14,
    flexDirection: "row",
    marginBottom: 8,
  },
  boxImage: {
    height: "100%",
    width: 100,
    objectFit: "cover",
    zIndex: 1,
  },
  shapeImage: {
    width: 160,
    height: 90,
    position: "absolute",
    bottom: 0,
  },
});
