import React from "react";
import { View, Image } from "react-native";

import imageFile from '../../assets/event-1.jpg'

const ImageComponent = (props) => {
  const users = props.users;

  return (
      <View>
          <Image style={{ width: 100, height: 100}} source={imageFile} />
      </View>
  );
};

export default ImageComponent;