import React from "react";
import { NavigationProp } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { LeftArrowIcon } from "../../assets/icons/LeftArrowIcon";

import DropdownComponent from "./components/DropDown";
type FavoriteDishProps = { navigation: NavigationProp<any> };

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const FavoriteDish = ({ navigation }: FavoriteDishProps) => {
  const goBack = () => {
    navigation.navigate("Home");
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
            <DropdownComponent
              data={data}
              title={"Pick your favorite dishess"}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FavoriteDish;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 30,
    borderWidth: 3,
  },
});
