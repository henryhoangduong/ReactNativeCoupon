import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageBackground } from "react-native";

import { LeftArrowIcon } from "../../assets/icons/LeftArrowIcon";

import DropdownComponent from "./components/DropDown";

const data = [
  { label: "Breakfast", value: "1" },
  { label: "Lunch", value: "2" },
  { label: "Dinner", value: "3" },
];
type MealTypeProps = {
  navigation: NavigationProp<any>;
};
const MealType = ({ navigation }: MealTypeProps) => {
  const goBack = () => {
    navigation.navigate("Home");
  };
  const handlePress = () => {
    navigation.navigate("SelectIngredients");
  };
  return (
    <View style={[styles.root]}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: "https://thucthan.com/media/2018/07/beefsteak/beefsteak.jpg",
        }}
        resizeMode="cover"
      >
        <View
          style={{
            width: "80%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 10,
              width: "100%",
            }}
            onPress={goBack}
          >
            <LeftArrowIcon color={"white"} />
          </TouchableOpacity>
          <View style={{ width: "100%" }}>
            <DropdownComponent data={data} title={"Pick your meal"} />
          </View>
        </View>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.letCookContainer]}
        >
          <Text style={[styles.letCoookText]}>Let's cook</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default MealType;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 30,
  },
  letCookContainer: {
    backgroundColor: "#BB2233",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderRadius: 50,
    marginTop: "auto",
    marginBottom: 15,
  },
  letCoookText: {
    fontWeight: "bold",
    color: "white",
  },
});
