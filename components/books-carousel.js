import { View, Text, Pressable, Image, ScrollView } from "react-native";

const BooksCarousel = ({ data }) => {
  return (
    <View style={{ paddingVertical: 12 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data?.map((book, index) => (
          <BookCard index={index} item={book} />
        ))}
      </ScrollView>
    </View>
  );
};

export default BooksCarousel;

const BookCard = ({ item, index }) => {
  const title = "Authority";
  const author = "Jeff Vandermeer";
  return (
    <Pressable key={index}>
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
        <Text style={{ fontWeight: 600 }}>
          {title.length > 14 ? title.substring(0, 14) + "..." : title}
        </Text>
        <Text style={{ fontSize: 12 }}>
          {author.length > 18 ? author.substring(0, 18) + "..." : author}
        </Text>
      </View>
    </Pressable>
  );
};
