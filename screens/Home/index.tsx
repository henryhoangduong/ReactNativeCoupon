import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MealType from "./MealType";
import { TouchableOpacity } from "react-native";
import IngredientType from "./IngredientType";
import { NavigationProp } from "@react-navigation/native";

type HomeProps = {
  navigation: NavigationProp<any>;
};

const steps = [
  {
    id: 1,
    component: <MealType />,
  },
  {
    id: 2,
    component: <IngredientType />,
  },
];

const HomeScreen = ({ navigation }: HomeProps) => {
  const [step, setStep] = React.useState<number>(0);
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(0)
      navigation.navigate("Discover");
    }
  };
  return (
    <View style={[styles.root]}>
      {steps[step].component}
      <TouchableOpacity onPress={handleNext} style={[styles.nextContainer]}>
        <Text style={[styles.nextText]}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
    backgroundColor: "black",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderRadius: 50,
    marginTop: "auto",
    marginBottom: 15,
  },
});
