import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import React from "react";

const FoodCard = () => {
  return (
    <View style={[styles.root]}>
      <View style={[styles.imageContainer]}>
        <Image
          style={[styles.image]}
          source={{
            uri: "https://trangnauan.com/wp-content/uploads/2020/06/cach-lam-beefsteak.jpg",
          }}
        />
      </View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.foodName]}>Beef stake</Text>
        <Text style={[styles.price]}>149,99$</Text>
        <Text>
          {" "}
          A hearty stew made with beef, potatoes, carrots, and onions, simmered
          until tender.
        </Text>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    shadowColor: "rgba(99, 99, 99, 0.8)",
    shadowOffset: { width: 20, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: "white",
    width: "95%",
    padding: 10,
    gap: 10,
    alignItems: "center",
  },
  imageContainer: {},
  image: {
    height: 130,
    width: 130,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    gap: 5,
  },
  foodName: {},
  price: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
