import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import axios from "axios";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";

import { Ingredient, Recipe } from "../types/types";

import IngredientContainer from "./IngredientContainer";

type Props = {
  handleSheetChange: (index: number) => void;
  recipe: Recipe | null;
};

const BottomSheetComponent = ({ handleSheetChange, recipe }: Props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  useEffect(() => {
    const fectchData = async () => {
      try {
        const response = await axios.post(
          "https://flipp-a0055ebbf2ef.herokuapp.com/task/recipe/details/v2?num=4",
          recipe,
        );
        setData(response.data);
        setLoading(false);
      } catch (e) {
        console.log("error: ", e);
      }
    };
    fectchData();
    return () => {};
  }, []);

  return (
    <BottomSheet
      onChange={handleSheetChange}
      enablePanDownToClose
      snapPoints={["90%"]}
      ref={bottomSheetRef}
    >
      <BottomSheetView style={styles.contentContainer}>
        {loading ? (
          <ActivityIndicator color="#BB2233" />
        ) : (
          <>
            <View style={[styles.root]}>
              <View style={[styles.imageNameContainer]}>
                <Image style={[styles.image]} source={{ uri: recipe?.image }} />
                <View style={[styles.namePriceContainer]}>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={[styles.recipeName]}
                  >
                    {recipe?.name}{" "}
                  </Text>
                  <View style={[styles.PriceContainer]}>
                    <Text style={[styles.currentPrice]}>
                      ${data?.current_price}
                    </Text>
                    <View style={{ position: "relative" }}>
                      <View
                        style={{
                          width: "100%",
                          height: 1,
                          backgroundColor: "gray",
                          left: 0,
                          top: "30%",
                        }}
                      />
                      <Text style={[styles.originalPrice]}>
                        ${data?.original_price}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.instructionContainer]}>
                <Text style={[styles.instructionText]}>
                  {recipe?.instructions.slice(1)}
                </Text>
              </View>
              <View style={[styles.ingredientsContainer]}>
                <Text style={[styles.ingredientTitle]}>Ingredients</Text>
                <ScrollView style={[styles.ingredientsListContainer]}>
                  {data?.result.map((item: Ingredient, index: number) => {
                    return (
                      <IngredientContainer key={index} ingredient={item} />
                    );
                  })}
                </ScrollView>
              </View>
            </View>
            <TouchableOpacity style={[styles.orderContainer]}>
              <Text style={[styles.orderText]}>Order!</Text>
            </TouchableOpacity>
          </>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheetComponent;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  root: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    padding: 10,
    gap: 10,
  },
  image: {
    borderRadius: 10,
    width: 170,
    height: 150,
  },
  imageNameContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  recipeName: {
    fontWeight: "bold",
    fontSize: 25,
    width: "100%",
    color: "#BB2233",
    marginBottom: 15,
  },
  namePriceContainer: { flex: 1, justifyContent: "center" },
  instructionContainer: {
    borderLeftWidth: 2,
    paddingHorizontal: 5,
    borderColor: "#BB2233",
    marginTop: 20,
  },
  instructionText: {
    fontWeight: "bold",
    color: "gray",
  },
  ingredientsContainer: {
    width: "100%",
    marginTop: 20,
  },
  ingredientTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  currentPrice: {
    fontWeight: "bold",
    fontSize: 24,
  },
  originalPrice: {
    color: "gray",
  },
  PriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  ingredientsListContainer: {
    width: "100%",
    marginTop: 15,
    gap: 10,
    height: "35%",
  },
  orderContainer: {
    backgroundColor: "#BB2233",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderRadius: 50,
    marginTop: "auto",
    marginBottom: 15,
    width: 300,
  },
  orderText: {
    fontWeight: "bold",
    color: "white",
  },
});
