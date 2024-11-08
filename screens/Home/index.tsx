import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar, Title } from "react-native-paper";
import FoodCard from "../../components/FoodCard";
import { ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

const HomeScreen = () => {
  return (
    <View style={[styles.root]}>
      <Text style={[styles.title]}>What goal do you have in mind</Text>
      <View>
        <View style={[styles.textContainer]}>
          <Text>Lose weight</Text>
        </View>
        <View>
          <Text>Lose weight</Text>
        </View>

        <View>
          <Text>Lose weight</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingTop: 150,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
  },
  textContainer: {
    borderWidth: 2,
  },
});
