import React from "react";
import { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { NavigationProp } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";

import { LeftArrowIcon } from "../assets/icons/LeftArrowIcon";
import BottomSheetComponent from "../components/BottomSheet";
import FoodCard from "../components/FoodCard";
import { useLayout } from "../context/layoutContext";
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
  const { toggleBottomBar } = useLayout();

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

  // Fetch data function
  const fetchData = async () => {
    setLoading(true); // Set loading to true when the fetch starts
    try {
      const response = await axios.post(
        "https://flipp-a0055ebbf2ef.herokuapp.com/task/recipe/?meal=lunch",
        [
          {
            ingredient_name: "Beef",
            ingredient_id: 11,
            ingredient_image:
              "https://www.billyparisi.com/wp-content/uploads/2023/07/homemade-ground-beef-1.jpg",
            meal_name: "lunch",
            meal_id: 1,
            ingredient_form_name: "Ground Beef",
          },
          {
            ingredient_name: "Fruit",
            ingredient_id: 55,
            ingredient_image:
              "https://media.istockphoto.com/id/164142758/photo/single-pear.jpg?s=612x612&w=0&k=20&c=bTXnXhqVLSsAqX6UVdNuhuXS_U3XvHwZ1NpIgl95S6c=",
            meal_name: "lunch",
            meal_id: 1,
            ingredient_form_name: "Pear",
          },
        ],
      );
      setRecipeList(response.data.recipes);
      setLoading(false); // Stop loading when done
    } catch (e) {
      console.log("Error: ", e);
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log("DiscoverScreen Focused");
      if (data === undefined) {
        fetchData();
      }
    }, []),
  );

  const chunkArray = (array: any[], size: number) => {
    const result: any[] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkArray(recipeList, 2);
  const handlePress = (item: Recipe) => {
    toggleBottomBar();
    setSelectedItem(item);
    bottomSheetRef.current?.expand();
    setIsSheetVisible(true);
  };

  const handleSheetChange = (index: number) => {
    if (index === -1) {
      setIsSheetVisible(false); // Close the bottom sheet if it is collapsed (swiped down)
      toggleBottomBar();
    }
  };

  return (
    <GestureHandlerRootView style={[styles.root]}>
      <View style={[styles.searchContainer]}>
        <TouchableOpacity
          style={[styles.leftArrowContainer]}
          onPress={handleGoBack}
        >
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
  leftArrowContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 22,
    shadowColor: "rgba(99, 99, 99, 0.8)",
    shadowOffset: { width: 100, height: 2 },
    shadowOpacity: 0.2,
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
