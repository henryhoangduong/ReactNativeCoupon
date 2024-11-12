import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Ingredient } from "../types/types";

type Props = {
  ingredient: Ingredient;
};

const IngredientContainer = ({ ingredient }: Props) => {
  console.log(
    "ingredient.details.original_price: ",
    ingredient.details.original_price,
  );
  return (
    <View style={[styles.ingredientItemContainer]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "50%",
            gap: 10,
          }}
        >
          <Image
            style={[styles.ingredientImage]}
            source={{ uri: ingredient.details.image_url }}
          />
          <Text>{ingredient.details.name}</Text>
        </View>

        <View style={[styles.priceContainer]}>
          <Text style={[styles.currentPrice]}>
            ${ingredient.details.current_price}
          </Text>
          <View
            style={{
              position: "relative",
              width: "100%",
              alignItems: "center",
            }}
          >
            {ingredient.details.original_price && (
              <>
                <View style={[styles.cross]} />
                <Text style={[styles.originalPrice]}>
                  ${ingredient.details.original_price}
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
      <View style={[styles.divider]} />
    </View>
  );
};

export default IngredientContainer;

const styles = StyleSheet.create({
  ingredientTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  currentPrice: {
    fontWeight: "bold",
    fontSize: 14,
  },
  originalPrice: {
    color: "gray",
    fontSize: 10,
  },
  cross: {
    width: "50%",
    height: 0.5,
    borderWidth: 0.7,
    borderColor: "gray",
    position: "absolute",
    top: "40%",
  },
  priceContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "20%",
    gap: 10,
  },
  ingredientsListContainer: {
    width: "100%",
    marginTop: 15,
  },
  ingredientImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  ingredientItemContainer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
  divider: {
    width: "90%",
    height: 0.5,
    backgroundColor: "gray",
    left: 0,
  },
});
