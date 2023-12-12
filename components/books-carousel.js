import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";

const BooksCarousel = ({ data }) => {
  return (
    <View style={{ paddingBottom: 8 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data?.map((book, index) => (
          <BookCard item={book} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
});

export default BooksCarousel;

const BookCard = ({ item, index }) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Image
          source={require("../assets/images/book-cover1.png")}
          style={{
            width: 125,
            height: 240,
            objectFit: "cover",
            marginRight: 16,
            marginBottom: -20,
          }}
        />
        <Text
          style={{
            fontWeight: "600",
            padding: 0,
          }}
        >
          Authoity
        </Text>
        <Text style={{ fontSize: 12 }}>Jeff Vandermeer</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
