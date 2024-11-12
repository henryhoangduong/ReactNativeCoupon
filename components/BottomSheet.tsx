import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import axios from "axios";
import { Divide } from "lucide-react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { Recipe } from "../types/types";

type Ingredients = {};

type Props = {
  handleCloseSheet: () => void;
  handleSheetChange: (index: number) => void;
  recipe: Recipe | null;
};

const BottomSheetComponent = ({
  handleCloseSheet,
  handleSheetChange,
  recipe,
}: Props) => {
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    console.log("loading");
    const fectchData = async () => {
      try {
        console.log("trying......");
        const response = await axios.post(
          "https://flipp-a0055ebbf2ef.herokuapp.com/task/recipe/details/v2/?num=4",
          recipe,
        );
        console.log("done");
        setData(response.data);
        console.log("data.result: ", data.result);
      } catch (e) {
        console.log("error: ", e);
      }
    };
    fectchData();
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
          <Text>loading.....</Text>
        ) : (
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
                  <View
                    style={{
                      width: 55,
                      height: 1,
                      borderWidth: 0.7,
                      borderColor: "gray",
                      position: "absolute",
                      left: 80,
                    }}
                  />
                  <Text style={[styles.originalPrice]}>
                    ${data?.original_price}
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.instructionContainer]}>
              <Text style={[styles.instructionText]}>
                {" "}
                {recipe?.instructions}{" "}
              </Text>
            </View>
            <View style={[styles.ingredientsContainer]}>
              <Text style={[styles.ingredientTitle]}>Ingredients</Text>
              <View style={[styles.ingredientsItemContainer]}>
                {/* {data?.result.map((item: any, index: number) => {
                  return <Text> {item?.ingredient_form_name} </Text>;
                })} */}
              </View>
            </View>
          </View>
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
    padding: 5,
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
  ingredientsItemContainer: {
    width: "100%",
    marginTop: 15,
  },
});
