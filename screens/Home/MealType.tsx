import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import DinnerIcon from "../../assets/icons/DinnerIcon";
import { ImageBackground } from "react-native";

const MealType = () => {
  return (
    <View style={[styles.root]}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: "https://thucthan.com/media/2018/07/beefsteak/beefsteak.jpg",
        }}
        resizeMode="cover" // Ensure the image covers the entire area
      >
        <View style={styles.overlay}></View>

        <Text style={[styles.title]}>What is your type of meal</Text>
        <View style={[styles.selectContainer]}>
          <TouchableOpacity style={[styles.textContainer]}>
            <DinnerIcon width={40} height={40} />
            <Text style={[styles.selectText]}>Dinner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.textContainer]}>
            <DinnerIcon width={40} height={40} />
            <Text style={[styles.selectText]}>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.textContainer]}>
            <DinnerIcon width={40} height={40} />
            <Text style={[styles.selectText]}>Lunch</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MealType;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  textContainer: {
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    height: 75,
    justifyContent: "flex-start",
    backgroundColor: "#F4F6F7",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 10,
  },
  selectContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
  },
  selectText: {
    fontWeight: "bold",
  },
  nextText: {
    fontWeight: "bold",
    color: "white",
  },
  nextContainer: {
    backgroundColor: "black",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderRadius: 50,
    marginTop: "auto",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
