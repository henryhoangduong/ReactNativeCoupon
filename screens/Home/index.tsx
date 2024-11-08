import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { Meal1 } from "../../assets/icons/Meal1";
import { FavoriteIcon } from "../../assets/icons/FavoriteIcon";
import { HealthyFoodIcon } from "../../assets/icons/HealthyFoodIcon";
import { SelectItem } from "./components/SelectItem";
type HomeProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen = ({ navigation }: HomeProps) => {
  const handleSelect = (screen: string) => {
    navigation.navigate(screen);
  };
  const handleNext = () => {
    navigation.navigate("Discover");
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
          <View style={[styles.mainContainer]}>
            <View style={[styles.selectFirstRowContainer]}>
              <SelectItem
                title={"Type of meal"}
                icon={<Meal1 height={70} width={70} />}
                handlePress={handleSelect}
                screen="MealType"
              />
              <SelectItem
                title={"Type of ingredients"}
                icon={<Meal1 height={70} width={70} />}
                handlePress={handleSelect}
                screen="IngredientTypes"
              />
            </View>
            <View style={[styles.selectFirstRowContainer]}>
              <SelectItem
                title={"Favorite dish"}
                icon={<FavoriteIcon height={70} width={70} />}
                handlePress={handleSelect}
                screen="Home"
              />
              <SelectItem
                title={"Favorite ingredients"}
                icon={<HealthyFoodIcon height={70} width={70} />}
                handlePress={handleSelect}
                screen="Home"
              />
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
  selectFirstRowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  mainContainer: {
    width: "80%",
    alignItems: "center",
    gap: 35,
    top: "20%",
  },
});
