import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import HomeScreen from "./components/HomeScreen";
import NewAlarm from "./components/NewAlarm";

const Stack = createNativeStackNavigator();

const screenOption = {
  headerStyle: {
    backgroundColor: "#C84B31",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={screenOption}
        />
        <Stack.Screen
          name="NewAlarm"
          component={NewAlarm}
          options={screenOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
