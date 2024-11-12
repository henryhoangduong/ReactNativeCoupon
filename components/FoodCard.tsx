import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";

import { Recipe } from "../types/types";

type FoodCardProps = {
  recipe: Recipe;
  handlePress: () => void;
};

const FoodCard = ({ recipe, handlePress }: FoodCardProps) => {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.root]}>
      <View style={[styles.imageContainer]}>
        <TouchableOpacity style={[styles.iconContainer]}>
          <AntDesign name="heart" style={{ color: "#BB2233" }} size={20} />
        </TouchableOpacity>
        <Image
          style={[styles.image]}
          source={{
            uri: recipe.image,
          }}
        />
      </View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.foodName]}>{recipe.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    shadowColor: "rgba(99, 99, 99, 0.8)",
    shadowOffset: { width: 20, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: "white",
    width: "45%",
    padding: 6,
    paddingTop: 0,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  imageContainer: {},
  image: {
    height: 130,
    width: 180,
  },
  textContainer: {
    flex: 1,
    gap: 5,
    justifyContent: "flex-start",
    padding: 5,
    width: "100%",
  },
  foodName: { fontSize: 16, fontWeight: "bold" },
  iconContainer: {
    backgroundColor: "white",
    position: "absolute",
    zIndex: 10,
    padding: 5,
    borderRadius: 15,
    right: 7,
    top: 3,
  },
});
