import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import DinnerIcon from "../../assets/icons/DinnerIcon";
const FavoriteDish = () => {
  return (
    <View style={[styles.root]}>
      <Text style={[styles.title]}>What is your favorite dish?</Text>
      <View style={[styles.selectContainer]}>
        <TouchableOpacity style={[styles.textContainer]}>
          <DinnerIcon height={40} width={40} />
          <Text style={[styles.selectText]}>Beef Steak</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.textContainer]}>
          <DinnerIcon height={40} width={40} />
          <Text style={[styles.selectText]}>Bun Bo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.textContainer]}>
          <DinnerIcon height={40} width={40} />
          <Text style={[styles.selectText]}>Cơm Chỉ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoriteDish;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: 20,
    paddingTop: 150,
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
  },
  textContainer: {
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    height: 75,
    justifyContent: "flex-start",
    backgroundColor: "#F4F6F7",
    flexDirection: "row",
    gap: 20,
    padding: 10,
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
});
