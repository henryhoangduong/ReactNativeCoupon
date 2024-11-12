import "react-native-gesture-handler";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { LayoutContextProvider } from "./context/layoutContext";
import { StackNavigator } from "./Navigator";
export default function App() {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <LayoutContextProvider>
          <StackNavigator />
        </LayoutContextProvider>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}
