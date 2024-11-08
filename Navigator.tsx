import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import { View } from "react-native";
import HomeIcon from "./assets/icons/HomeIcon";
import { AccountIcon } from "./assets/icons/AccountIcon";
import ProfileScreen from "./screens/ProfileScreen";
import CartIcon from "./assets/icons/CartIcon";
import DiscoverScreen from "./screens/DiscoverScreen";
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
