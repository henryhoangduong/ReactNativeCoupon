import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LeftArrowIcon } from "../../assets/icons/LeftArrowIcon";
import { NavigationProp } from "@react-navigation/native";
type IngredientTypesProps = {
  navigation: NavigationProp<any>;
};
export const IngredientTypes = ({navigation}:IngredientTypesProps) => {
    const goBack = () => {
    navigation.navigate("Home")
  }
  return (
    <View style={[styles.root]}>
      <View>
        <TouchableOpacity onPress={goBack}>
          <LeftArrowIcon />
        </TouchableOpacity>
      </View>
      <Text>IngredientTypes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
