import React from "react";
import { Text, FlatList, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserList = (props) => {
  const users = props.users;

  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        style={{
          padding: 20,
        }}
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
  return <Text
    style={{
      padding: 5,
    }}
  
  >---</Text>;
};

const RenderUser = ({ item }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20
        }}
      >
        Vardas: {item.name}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20
        }}
      >
        Pavardė: {item.surname}
      </Text>
    </View>
  );
};

export default UserList;
