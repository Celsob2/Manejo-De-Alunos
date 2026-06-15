import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { AlunosProvider } from "./src/context/AlunosContext";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <AlunosProvider>
        <NavigationContainer>
          <AppNavigator />
          <StatusBar style="dark" />
        </NavigationContainer>
      </AlunosProvider>
    </SafeAreaProvider>
  );
};