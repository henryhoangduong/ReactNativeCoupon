import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text } from "react-native";
export const SelectItem = ({
  icon,
  title,
  screen,
  handlePress = (screen: string) => {},
}: {
  icon: React.ReactNode;
  title: string;
  screen: string;
  handlePress?: (screen: string) => void;
}) => {
  const [isPressed, setIsPressed] = React.useState<boolean>(false);
  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        isPressed && styles.selectContainerPressed,
        styles.selectContainer,
      ]}
      onPress={() => {
        handlePress(screen);
      }}
    >
      {icon}
      <Text style={[{ color: "white" }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
  nextText: {
    fontWeight: "bold",
    color: "white",
  },
  nextContainer: {
    backgroundColor: "#BB2233",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderRadius: 50,
    marginTop: "auto",
    marginBottom: 15,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  selectContainer: {
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  selectFirstRowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  selectContainerPressed: {
    backgroundColor: "#BB2233",
  },
  mainContainer: {
    width: "80%",
    alignItems: "center",
    gap: 35,
    top: "20%",
  },
});
