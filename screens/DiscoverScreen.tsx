import React, { useEffect } from "react";
import { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { NavigationProp } from "@react-navigation/native";
import axios from "axios";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";

import { LeftArrowIcon } from "../assets/icons/LeftArrowIcon";
import BottomSheetComponent from "../components/BottomSheet";
import FoodCard from "../components/FoodCard";
import { Recipe } from "../types/types";

type DiscoverProps = {
  navigation: NavigationProp<any>;
  data?: [];
};
const DiscoverScreen = ({ navigation, data }: DiscoverProps) => {
  const handleGoBack = () => {
    navigation.navigate("Home");
  };
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedItem, setSelectedItem] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [recipeList, setRecipeList] = useState<Recipe[]>([
    {
      name: "Macaroni Salad",
      ingredients: [
        "Macaroni",
        "Chicken Eggs",
        "Celery",
        "Mayonnaise",
        "Mustard",
      ],
      instructions:
        "Step 1: Cook macaroni according to package directions. Step 2: While macaroni is hot, add diced celery, hard-boiled eggs, mayonnaise, and mustard. Stir well.",
      image:
        "https://images.pexels.com/photos/16845755/pexels-photo-16845755.jpeg",
    },
  ]);

  useEffect(() => {
    console.log("DiscoverScreen");

    const fectchData = async () => {
      try {
        console.log("Calling");

        const response = await axios.post(
          "https://flipp-a0055ebbf2ef.herokuapp.com/task/recipe/?meal=lunch",
          [
            {
              ingredient_id: 12,
              ingredient_image:
                "https://img.freepik.com/premium-photo/pasta-food-4k-images-download_555090-52786.jpg",
              ingredient_name: "Pasta",
              meal_id: 1,
              meal_name: "lunch",
              ingredient_form_name: "Spaghetti",
            },
          ],
        );
        console.log("response.data: ", response.data);
        setRecipeList(response.data.recipes);
        setLoading(false);
        console.log("Done");
      } catch (e) {
        console.log("error: ", e);
      }
    };

    if (data === undefined) {
      fectchData();
    }
  }, []);

  const chunkArray = (array: any[], size: number) => {
    const result: any[] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkArray(recipeList, 2);
  const handlePress = (item: Recipe) => {
    bottomSheetRef.current?.expand();
    setSelectedItem(item);
    setIsSheetVisible(true);
  };
  const handleCloseSheet = () => {
    setIsSheetVisible(false);
  };
  const handleSheetChange = (index: number) => {
    if (index === -1) {
      setIsSheetVisible(false); // Close the bottom sheet if it is collapsed (swiped down)
    }
  };

  return (
    <GestureHandlerRootView style={[styles.root]}>
      <View style={[styles.searchContainer]}>
        <TouchableOpacity onPress={handleGoBack}>
          <LeftArrowIcon color="#BB2233" />
        </TouchableOpacity>
        <Searchbar
          placeholder="Search your promotion....."
          placeholderTextColor={"#a6a2a2"}
          value=""
          style={[styles.searchBar]}
        />
      </View>
      <View style={[styles.discoverContainer]}>
        <Text style={[styles.discoverText]}>Discover</Text>
      </View>
      {loading ? (
        <ActivityIndicator color="#BB2233" />
      ) : (
        <ScrollView
          style={{ width: "103%" }}
          contentContainerStyle={styles.container}
        >
          {rows.map((row, index) => {
            return (
              <View key={index} style={styles.row}>
                {row.map((item: Recipe) => (
                  <FoodCard
                    handlePress={() => {
                      handlePress(item);
                    }}
                    recipe={item}
                  />
                ))}
              </View>
            );
          })}

          <View style={[{ height: 80 }]}></View>
        </ScrollView>
      )}
      {isSheetVisible && (
        <BottomSheetComponent
          recipe={selectedItem}
          handleSheetChange={handleSheetChange}
          handleCloseSheet={handleCloseSheet}
        />
      )}
    </GestureHandlerRootView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingTop: 70,
    padding: 10,
  },
  searchContainer: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    gap: 10,
  },
  searchBar: {
    shadowColor: "rgba(99, 99, 99, 0.8)",
    shadowOffset: { width: 100, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    backgroundColor: "white",
    flex: 1,
  },
  discoverText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  discoverContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  container: {
    paddingVertical: 10,
    gap: 10,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
    width: "100%",
  },
  bottomSheetContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  bottomSheetImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
