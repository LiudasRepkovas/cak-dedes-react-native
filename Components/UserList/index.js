import React from "react";
import { Text, FlatList, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserList = ({ users }) => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={users}
        renderItem={RenderUser}
        ItemSeparatorComponent={SeparatorComponent}
      ></FlatList>
      <Button
        onPress={() => {
          navigation.navigate("Image");
        }}
        title={"Navigate to Image"}
      ></Button>
    </View>
  );
};

const SeparatorComponent = () => {
  return <Text>---</Text>;
};

const RenderUser = ({ item }) => {
  return (
    <View>
      <Text>Vardas: {item.name}</Text>
      <Text>Pavardė: {item.surname}</Text>
    </View>
  );
};

export default UserList;
