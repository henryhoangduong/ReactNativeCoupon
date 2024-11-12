import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import { AccountIcon } from "./assets/icons/AccountIcon";
import CartIcon from "./assets/icons/CartIcon";
import HomeIcon from "./assets/icons/HomeIcon";
import DiscoverScreen from "./screens/DiscoverScreen";
import HomeScreen from "./screens/Home";
import FavoriteDish from "./screens/Home/FavoriteDish";
import FavoriteIngredients from "./screens/Home/FavoriteIngredients";
import { IngredientTypes } from "./screens/Home/IngredientTypes";
import MealType from "./screens/Home/MealType";
import ProfileScreen from "./screens/ProfileScreen";
import SelectIngredients from "./screens/SelectIngredients";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MealType"
        component={MealType}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IngredientTypes"
        component={IngredientTypes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FavoriteDish"
        component={FavoriteDish}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FavoriteIngredients"
        component={FavoriteIngredients}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectIngredients"
        component={SelectIngredients}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          bottom: 20,
          left: 15,
          right: 15,
          elevation: 0,
          borderRadius: 15,
          height: 80,
          shadowColor: "rgba(99, 99, 99, 0.8)",
          shadowOffset: { width: 100, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ top: "50%" }}>
              <HomeIcon
                width={30}
                height={30}
                color={focused ? "#BB2233" : "black"}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ top: "50%" }}>
              <CartIcon
                height={30}
                width={30}
                color={focused ? "#BB2233" : "black"}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
        name="Discover"
        component={DiscoverScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ top: "50%" }}>
              <AccountIcon
                height={30}
                width={30}
                fill={focused ? "#BB2233" : "black"}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
