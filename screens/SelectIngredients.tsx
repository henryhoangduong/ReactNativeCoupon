import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import axios from "axios";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";

const IngredientComponent = ({
  data,
  handleRemove,
}: IngredientComponentProps) => {
  return (
    <View style={styles.ingredientContainer}>
      <TouchableOpacity
        onPress={() => {
          handleRemove(data.ingredient_id);
        }}
        style={[styles.iconContainer]}
      >
        <AntDesign name="close" style={{ color: "black" }} size={20} />
      </TouchableOpacity>
      <Avatar.Image
        size={69}
        source={{
          uri: data.ingredient_image,
        }}
      />
    </View>
  );
};

type Ingredient = {
  ingredient_id: number;
  ingredient_image: string;
  ingredient_name: string;
  meal_id: number;
  meal_name: string;
  ingredient_form_name: string;
};
type IngredientComponentProps = {
  data: Ingredient;
  handleRemove: (ingredient_id: number) => void;
};

type SelectIngredientsProps = {
  navigation: NavigationProp<any>;
};

const SelectIngredients = ({ navigation }: SelectIngredientsProps) => {
  const [ingredientLists, setIngredientLists] = useState<Ingredient[]>([
    {
      ingredient_id: 12,
      ingredient_image:
        "https://img.freepik.com/premium-photo/pasta-food-4k-images-download_555090-52786.jpg",
      ingredient_name: "Pasta",
      meal_id: 1,
      meal_name: "lunch",
      ingredient_form_name: "Fettuccine",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fectchData = async () => {
      try {
        const response = await axios.get(
          "https://flipp-a0055ebbf2ef.herokuapp.com/task/ingredient/?meal=breakfast",
        );
        setIngredientLists(response.data.ingredient);
      } catch (e) {
        console.log("error:", e);
      }
    };
    fectchData();
    setLoading(false);
  }, []);

  const handlePress = () => {
    navigation.navigate("Discover");
  };

  const removeIngredients = (ingredient_id: number) => {
    // Filter out the ingredient with the matching ingredient_id
    const updatedIngredients = ingredientLists.filter(
      (ingredient) => ingredient.ingredient_id !== ingredient_id,
    );

    // Update state with the filtered ingredients
    setIngredientLists(updatedIngredients);
  };

  if (loading) {
    return <Text>loading...</Text>;
  }

  return (
    <View style={[styles.root]}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: "https://thucthan.com/media/2018/07/beefsteak/beefsteak.jpg",
        }}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={[styles.titledesCotnainer]}>
            <Text style={[styles.title]}>Select your favorite ingredients</Text>
            <View style={[styles.descContainer]}>
              <Text style={[styles.desc]}>
                Choose your favorite ingredients to have your own perfect meal
                or add to “Allergic List” for not any further recommendation.
              </Text>
            </View>
          </View>
          <View style={[styles.ingredientsListContainer]}>
            {ingredientLists.map((item, index) => {
              return (
                <IngredientComponent
                  key={index}
                  handleRemove={removeIngredients}
                  data={item}
                />
              );
            })}
          </View>
          <TouchableOpacity
            onPress={handlePress}
            style={[styles.letCookContainer]}
          >
            <Text style={[styles.letCoookText]}>Propose Meal</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelectIngredients;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
    width: "100%",
    gap: 10,
    paddingTop: 50,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
  },
  titledesCotnainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  desc: {
    color: "white",
  },
  ingredientContainer: {},
  ingredientsListContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "80%",
    flexWrap: "wrap",
    top: "50%",
    transform: [{ translateY: -50 }],
  },
  iconContainer: {
    position: "absolute",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 15,
    zIndex: 10,
    right: "-1%",
    top: "-10%",
  },
  descContainer: {
    width: "80%",
  },
  letCookContainer: {
    backgroundColor: "#BB2233",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderRadius: 50,
    marginTop: "auto",
    marginBottom: 40,
  },
  letCoookText: {
    fontWeight: "bold",
    color: "white",
  },
});
