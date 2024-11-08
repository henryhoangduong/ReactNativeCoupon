import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import FoodCard from "../components/FoodCard";
import { ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

const HomeScreen = () => {
  return (
    <TouchableWithoutFeedback>
          <View style={[styles.root]}>
      <View style={[styles.searchContainer]}>
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
      <ScrollView
        style={{ width: "103%" }}
        contentContainerStyle={styles.container}
      >
        <FoodCard />
        <FoodCard />
        <FoodCard />
          <FoodCard />
          <View style={[{height:200}]}></View>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>

  );
};

export default HomeScreen;

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
  },
  searchBar: {
    shadowColor: "rgba(99, 99, 99, 0.8)",
    shadowOffset: { width: 100, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    backgroundColor: "white",
    width: "100%",
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
    paddingVertical: 10, // Add padding at the top and bottom
    gap: 10, // Add gap between each FoodCard
  },
});
