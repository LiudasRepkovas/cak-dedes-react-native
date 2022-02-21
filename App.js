import { StyleSheet, Text, View } from "react-native";
import UserList from "./Components/UserList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageComponent from "./Components/ImageComponent";

const users = [
  { name: "Juozas", surname: "Pavardė2", email: "email@gmail.com" },
  { name: "Antanas", surname: "Pavardė3", email: "email@gmail.com" },
  { name: "Tadas", surname: "Pavardė4", email: "email@gmail.com" },
  { name: "Kazimieras", surname: "Pavardė5", email: "email@gmail.com" },
  { name: "Bronius", surname: "Pavardė6", email: "email@gmail.com" },
];

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"User List"} component={UserScreen} />
        <Stack.Screen name={"Image"} component={ImageComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const UserScreen = () => {
  return <UserList users={users}></UserList>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
