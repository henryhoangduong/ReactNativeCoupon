import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MealType from "./MealType";
import { TouchableOpacity } from "react-native";
import IngredientType from "./IngredientType";
import { NavigationProp } from "@react-navigation/native";
import FavoriteDish from "./FavoriteDish";
import { ImageBackground } from "react-native";
import { Meal1 } from "../../assets/icons/Meal1";

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
  {
    id: 3,
    component: <FavoriteDish />,
  },
];

const HomeScreen = ({ navigation }: HomeProps) => {
  const [step, setStep] = React.useState<number>(0);
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(0);
      navigation.navigate("Discover");
    }
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
        <View style={[styles.overlay]}></View>
        <View style={[styles.container]}>
          <Text style={[styles.title]}>What is your plates?</Text>
          <View style={[{borderWidth:3, width:"80%", alignItems:"center"}]}>
            <View style={[{ flexDirection: "row" }]}>
              <View>
                <Meal1 />
                <Text style={[{color:"white"}]}>Type of meal</Text>
              </View>
              <View>
                <Meal1 />
                <Text style={[{color:"white"}]}>Type of meal</Text>
              </View>
            </View>
            <View style={[{ flexDirection: "row" }]}>
              <View>
                <Meal1 />
                <Text style={[{color:"white"}]}>Type of meal</Text>
              </View>
              <View>
                <Meal1 />
                <Text style={[{color:"white"}]}>Type of meal</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={handleNext} style={[styles.nextContainer]}>
            <Text style={[styles.nextText]}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
});
